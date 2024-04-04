import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutFom from './CheckoutForm'



// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51P0w1dClp5yFoXKbXAeLMXLxECeHbOli6OLrG8Y43G3qdjBwJUIcnlg9wh5rQHCp6ksmWkm1OJcHfrwWBNZVwKJX00vRpQqsIi');

function ChargeCustomer() {

    const options = {
        clientSecret: "pi_3P1g6DClp5yFoXKb0ZAyOFk4_secret_CPvV2mECWdn39YE5USwrXOZA7",
    };

    return (
        <Elements stripe={stripePromise} options={options}>
            <CheckoutFom />
        </Elements>
    );
};

export default ChargeCustomer
