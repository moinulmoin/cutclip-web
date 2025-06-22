// checkout/route.ts
import { siteConfig } from "@/lib/site-config";
import { Checkout } from "@polar-sh/nextjs";

export const GET = Checkout({
	accessToken: process.env.POLAR_ACCESS_TOKEN,
	successUrl: `${siteConfig.url}/success?checkout_id={CHECKOUT_ID}`,
	server: process.env.NODE_ENV !== "production" ? "sandbox" : "production",
});
