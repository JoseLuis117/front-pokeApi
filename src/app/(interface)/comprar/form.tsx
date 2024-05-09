"use client"
import React, { useCallback, useState, useEffect } from "react";
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
export default function BuyCoins({token}:{token:string}) {
    const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PK}`);
    console.log("stripe")
    console.log(stripePromise)
    console.log(token)
    const CheckoutForm = () => {
        const fetchClientSecret = useCallback(async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/stripe/createSession`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ quantity: 1, token })
                });
                console.log("Res")
                console.log(res)
                console.log("Callback");
                const data = await res.json(); // Esperar a que se resuelva la promesa
                console.log(data);
        
                console.log("Callback2");
                console.log(data.client_secret);
                
                return data.client_secret;
            } catch (error) {
                console.error("Error fetching client secret:", error);
                throw error; // Propagar el error hacia arriba
            }
        }, []);
        
        const options = { fetchClientSecret };
        console.log(fetchClientSecret)
        return (
            <div id="checkout">
                <EmbeddedCheckoutProvider
                    stripe={stripePromise}
                    options={options}
                >
                    <EmbeddedCheckout />
                </EmbeddedCheckoutProvider>
            </div>
        )
    }
    console.log(stripePromise)
    return (
        <div className="h-screen">
            <CheckoutForm />
        </div>
    )
}