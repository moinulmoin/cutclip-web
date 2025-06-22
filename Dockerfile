# Use build ARG for Node version flexibility
ARG NODE_VERSION=22
FROM node:${NODE_VERSION}-alpine AS base

# Dependencies stage
FROM base AS deps
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Builder stage
FROM base AS builder
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma client
RUN pnpm prisma generate

# Build the application
RUN pnpm build

# Production stage
FROM base AS runner
WORKDIR /app

# Install wget for healthcheck
RUN apk add --no-cache wget

# Set production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Install pnpm for runtime Prisma operations
RUN npm install -g pnpm

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Create .next directory with proper permissions
RUN mkdir .next && chown nextjs:nodejs .next

# Copy built application from builder stage
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma

# Install exact version of Prisma CLI for migrations
RUN pnpm add --global --save-exact "prisma@$(node --print 'require("./node_modules/@prisma/client/package.json").version')"

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start with Prisma migrations then the application
CMD sh -c "prisma migrate deploy && node server.js"