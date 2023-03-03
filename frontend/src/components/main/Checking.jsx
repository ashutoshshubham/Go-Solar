import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Mgkv4SCmObv8NvOiv4pqGqr0B6f1wxp9o7UOWNcGfGsSeeCicjOnJ4kzbZMl4zD2PZMHg4LFTCo7ZSCws0uxZ3m00ZYvor1Wo');

const Checking = () => {

    const options = {
        // passing the client secret obtained from the server
        clientSecret: 'sk_test_51Mgkv4SCmObv8NvOi1HX98Ne8lGgZVze0XqiDuUA4WnUyihxTTsyPxUF7KSAmIqn5EpNdVQchJpIJewmLwMyLB2m00YketDR0Y',
    };

    return (
        <Elements stripe={stripePromise} options={options}>
            <CheckOutForm />
        </Elements>
    )
}

export default Checking