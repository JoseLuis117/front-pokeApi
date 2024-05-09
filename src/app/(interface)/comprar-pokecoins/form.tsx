"use client"
import React, { useCallback, useState, useEffect } from "react";
import { StripeElementsOptions, loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout, Elements } from '@stripe/react-stripe-js';
import { Appearance } from "@stripe/stripe-js";
import CheckoutForm from "./form2";
import TextGradient from "@/components/textGradient";
import './stylesForm.css'
export default function BuyCoins({ token }: { token: string }) {
    const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PK}`);
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/stripe/createIntentPayment`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ quantity: 1, token })
                });

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                setClientSecret(data.client_secret);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    const appearance: Appearance = {
        theme: 'night',
        labels: 'floating',
        variables: {
            colorBackground: '#374151',

        }
    };
    const options: StripeElementsOptions | undefined = {
        clientSecret,
        appearance,
    };
    /* const CheckoutForm = () => {
        const fetchClientSecret = useCallback(async () => {
            try {
                const res = await fetch("http://localhost:3000/api/stripe/createSession", {
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
        console.log(fetchClientSecret) */

    return (
        <div className="flex justify-center items-center">
            <div className="App min-h-[1000px] max-w-[1100px]">
                <div className="grid grid-cols-1 bg-gray-800 rounded-md w-full p-12 gap-8">
                    <div className="flex flex-col px-8 gap-8 justify-center">
                        <h1 className={`text-xl text-center font-bold bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent`}>Compra PokeCoins</h1>
                        <div className="flex gap-12 justify-center">
                            <p className="text-slate-400 font-bold text-xl">1 PokeCoin </p>
                            <p className="text-slate-400 font-bold text-xl">$30.00 MXN</p>

                        </div>
                        <img src="/coin.jpg" alt="PokeCoinImg" className="w-4/5  mx-auto max-h-96"></img>
                    </div>
                    <div className="flex items-center">
                        {clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                                <CheckoutForm />
                            </Elements>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
