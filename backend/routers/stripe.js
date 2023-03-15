const express = require('express');
const Stripe = require('stripe');
const router = express.Router();

require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_KEY)


// const paymentIntent = await stripe.paymentIntents.create({
//     amount: 1099,
//     currency: 'usd',
//     description: 'Software development services',
//   })





router.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({

        line_items: [
            {
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: 'T-shirt',
                    },
                    unit_amount: 2000,
                },
                quantity: 2,
            },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/main/checkout-success',
        cancel_url: 'http://localhost:3000/main/checkout-cancel',
    });

    res.send({ url: session.url });
});

module.exports = router
