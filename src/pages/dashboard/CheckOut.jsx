import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";

const CheckOut = () => {
    const price = 2563
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState(``)
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState()
    const { user } = useContext(AuthContext)

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data);
                setClientSecret(res?.data?.clientSecret)
            })
    }, [])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error?.message)
            console.log('error', error);
        } else {
            setError(``)
            console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, newError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'Jenny Rosen',
                        email: user?.email || 'Jenny Rosen',
                    },
                },
            },
        );
        if (newError) {
            setError(error)
            console.log(error);
        }
        console.log(paymentIntent);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {error}
        </>
    );
};

export default CheckOut;