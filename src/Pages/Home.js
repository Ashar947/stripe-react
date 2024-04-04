import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';

async function loadStripePromise() {
    return loadStripe('pk_test_51P0w1dClp5yFoXKbXAeLMXLxECeHbOli6OLrG8Y43G3qdjBwJUIcnlg9wh5rQHCp6ksmWkm1OJcHfrwWBNZVwKJX00vRpQqsIi');
}

function Home() {
    const [stripe, setStripe] = useState(null);

    useEffect(() => {
        async function fetchStripe() {
            const stripeInstance = await loadStripePromise();
            setStripe(stripeInstance);
        }
        fetchStripe();
    }, []);

    const handleClick = async () => {
        try {
            const response = await fetch('create/customer/card', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
            });
            const session = await response.json();
            console.log(session);

            const result = stripe.redirectToCheckout({
                sessionId: session.id
            });

            console.log(result);
            if (result.error) {
                console.log("error");
            }
        } catch (error) {
            console.log("Catch Error");
            console.log(error);
        }
    }

    return (
        <>
            <h1>Home</h1>
            {stripe && <button onClick={handleClick}>Create Card</button>}
            {/* <button> Create Card</button> */}
        </>
    );
}

export default Home;
