import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK)
const Payment = () => {


    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckOut></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;