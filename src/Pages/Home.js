import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
async function Home() {
    const [clientSecret, setClientSecret] = useState()
    const stripePromise = loadStripe('pk_test_51P0w1dClp5yFoXKbXAeLMXLxECeHbOli6OLrG8Y43G3qdjBwJUIcnlg9wh5rQHCp6ksmWkm1OJcHfrwWBNZVwKJX00vRpQqsIi');
    
    const handleClick = async () => {
        try {
            // EnterIDHere

            const response = await fetch('create-payment-stripe', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                // body: JSON.stringify({ words: "1000", price: "1000", duration: "m" })
            });
            const session = await response.json();
            console.log(session);
            console.log("session");
            setClientSecret(session.id)
            // const result = stripe.redirectToCheckout({
            //     sessionId: session.id
            // });
            // console.log("result")
            // console.log(result)
            // if (result.error) {
            //     console.log("error");
            // }
        } catch (error) {
            console.log("Catch Error")
            console.log(error)
        }

    }
    await handleClick()
    
    const options = {
        clientSecret,
    };

    // useEffect(() => {
    //   handleClick()
    // }, [])

    return (
        <>
            <h1>Home</h1>
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm />
            </Elements>

        </>

    )
}

export default Home