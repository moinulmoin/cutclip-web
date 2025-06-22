import { prisma } from "@/lib/prisma";
import { Webhooks } from "@polar-sh/nextjs";

export const POST = Webhooks({
	webhookSecret: process.env.POLAR_WEBHOOK_SECRET!,
	onPayload: async (payload) => {
		if (payload.type === "checkout.updated") {
			const { id, status, amount, currency, customerName, customerEmail, product } = payload.data;
			console.log(`Checkout updated: ${id}`);
			console.log(`Status: ${status}`);
			console.log(`Amount: ${amount}`);
			console.log(`Currency: ${currency}`);
			console.log(`Checkout ID: ${id}`);

			const user = await prisma.user.create({
				data: {
					name: customerName,
					email: customerEmail,
					license: product.benefits[0].id,
				},
			});
		}
	},
});
