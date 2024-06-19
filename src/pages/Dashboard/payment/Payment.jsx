import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const stripePromise  = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    const location = useLocation();
    const { period, price } = location.state || {};
    

    return (
        <div>
             <Helmet>
                <title>TechWave - Payment</title>
            </Helmet>
            <div className="w-full md:w-1/2 mx-auto divider divider-secondary text-3xl my-4 uppercase">
              payment
            </div>
            <div>
            <Elements stripe={stripePromise}>
                    <CheckoutForm period={period} price={price} ></CheckoutForm>
                </Elements>
            </div>

             
        </div>
    );
};

export default Payment;