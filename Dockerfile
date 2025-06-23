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
RUN pnpm prisma db push

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

# Copy built application from builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Expose port
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the application
CMD ["node", "server.js"]