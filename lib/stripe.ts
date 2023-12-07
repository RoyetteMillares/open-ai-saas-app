import Stripe from "stripe";

export const stripe = new Stripe(process.env.SECRET_STRIPE_API_KEY!, {
    apiVersion: "2023-10-16",
    typescript: true,
})




export const createPaymentMethod = () => {
    
}