import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const Subscription = () => {
    const [user, setUser] = useState()
    const [period, setPeriod] = useState('1 minute');
    const [price, setPrice] = useState(2); // Initial price for 1 minute
    const navigate = useNavigate();
  
    const handlePeriodChange = (event) => {
      const selectedPeriod = event.target.value;
      setPeriod(selectedPeriod);
  
      let newPrice;
      switch (selectedPeriod) {
        case '1 minute':
          newPrice = 2; // $2 per minute
          break;
        case '5 days':
          newPrice = 20; // Arbitrary price for 5 days
          break;
        case '10 days':
          newPrice = 35; // Arbitrary price for 10 days
          break;
        default:
          newPrice = 0;
      }
  
      setPrice(newPrice);
    };
  
    const handleSubscribe = () => {
      // Update the user's premium status
      const currentTime = new Date();
      let premiumExpiry;
      switch (period) {
        case '1 minute':
          premiumExpiry = new Date(currentTime.getTime() + 1 * 60 * 1000);
          break;
        case '5 days':
          premiumExpiry = new Date(currentTime.getTime() + 5 * 24 * 60 * 60 * 1000);
          break;
        case '10 days':
          premiumExpiry = new Date(currentTime.getTime() + 10 * 24 * 60 * 60 * 1000);
          break;
        default:
          premiumExpiry = null;
      }
  
      setUser({ ...user, premiumTaken: premiumExpiry });
  
      // Navigate to the payment page
      navigate('/dashboard/payment', { state: { period, price } });
    };
  
    
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/1MSfM4N/pexels-padrinan-1111318.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase space-y-2">
              Subscribe to our news letter
            </h1>
            <p className="mb-5 text-2xl">
              Be the first to get the exclusive offers and latest news
            </p>
            <label className="flex justify-center">
              <h2 className="text-2xl text-center">Subscription Period:</h2>
              <select className="text-sm text-black rounded-md mx-2 p-2 mb-2" value={period} onChange={handlePeriodChange}>
                <option value="1 minute">1 minute</option>
                <option value="5 days">5 days</option>
                <option value="10 days">10 days</option>
              </select>
            </label>
            <p className="text-2xl">Price: ${price}</p>
            <button onClick={handleSubscribe} className="btn btn-primary my-2">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
