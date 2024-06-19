import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const CheckoutForm = ({period,price}) => {
  
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure()
  const [transactionId, setTransactionId] = useState('');
  const { user } = useContext(AuthContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const totalPrice = parseInt(price)

  useEffect(()=>{
    
    if (totalPrice > 0) {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                // console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }
  },[axiosSecure, totalPrice])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError('');
    }
  

   // confirm payment
   const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
        card: card,
        billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous'
        }
    }
})

if (confirmError) {
    console.log('confirm error')
}
else {
    console.log('payment intent', paymentIntent)
    if (paymentIntent.status === 'succeeded') {
        // console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id);
        Swal.fire({
          position: "center",
          icon: 'success',
          title: 'Payment Successful',
          text: `Transaction ID: ${paymentIntent.id}`,
          timer: 1500
        });
        
    }
}
  }
  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="w-full  md:w-1/2 border-2 mt-10 border-secondary rounded-lg  flex-col justify-center bg-neutral-content">
      <p className="text-xl text-center my-4 ">Price: ${price}</p>
      <div className="w-full md:w-4/5 mx-auto">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="w-full md:w-1/4 btn btn-sm px-6 btn-secondary  my-4" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
        <p className="text-red-600">{error}</p>
      </div>
    </form>
    </div>
  );
  }

export default CheckoutForm;
