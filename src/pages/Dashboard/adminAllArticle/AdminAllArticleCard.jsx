
import { Link, useNavigation } from "react-router-dom";
import Loader from "../../../components/sectionTitle/Loader";
import { useState } from "react";
import axios from "axios";


const NewsCard = ({ news, onArticleUpdate }) => {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false);
  const [declineReason, setDeclineReason] = useState('');
  const [declineModalOpen, setDeclineModalOpen] = useState(false);
  if (navigation.state === 'loading') return <Loader />
  const { image, title, publisher, description, customer,_id,tag,status } = news;

  const handleApprove = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`http://localhost:5000/allArticle/${_id}/approve`);
      if (response.data && response.data.article) {
        onArticleUpdate(response.data.article);
      } else {
        console.error('Invalid response data:', response.data);
      }
    } catch (error) {
      console.error('Error approving article', error);
    } finally {
      setLoading(false);
    }
  };
  const handleDecline = () => {
    setDeclineModalOpen(true);
  };
  
  const handleDeclineSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`http://localhost:5000/allArticle/${_id}/decline`, { reason: declineReason });
      if (response.data && response.data.article) {
        onArticleUpdate(response.data.article);
        setDeclineModalOpen(false);
      } else {
        console.error('Invalid response data:', response.data);
      }
    } catch (error) {
      console.error('Error declining article', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMakePremium = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`http://localhost:5000/allArticle/${_id}/premium`);
      onArticleUpdate(response.data.article);
    } catch (error) {
      console.error('Error making article premium', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className={`card card-compact w-full h-[500px] bg-base-100 shadow-xl rounded-none `}>
        <figure className="relative">
          <img src={image} className="h-60 w-full object-cover" />
          
        </figure>
        <div className="card-body">
          <h2 className="text-lg  -mt-2 border-b-2">
          <span className="text-secondary font-bold uppercase">{tag} </span>
            <span className="text-gray-500">/ {publisher} </span>
            
          </h2>
          <h2 className="card-title text-2xl">
            {title} : {description}
          </h2>
          <div className="card-actions justify-start">
          <Link to={`/articleDetails/${_id}`}>
            <button className={`btn btn-secondary rounded-none `}>Details</button>
            </Link>
            <br />
            <button
                  onClick={handleMakePremium}
                  disabled={loading}
                  className={`btn bg-violet-200 rounded-none`}
                >
                  {loading ? "MakingPremium..." : "Premium"}
                </button>
            
            
          </div>
          <div className="grid grid-cols-3 gap-2">
          <div className="grid grid-cols-3 gap-2 mt-4">
          {status === "approved" ? (
              <span className="text-green-500">Approved</span>
            ) : status === "declined" ? (
              <>
                <span className="text-red-500">Declined</span>
                <button
                  onClick={() => alert(`Reason: ${declineReason}`)}
                  className={`btn btn-rose-200 rounded-none`}
                >
                  View Reason
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleApprove}
                  disabled={loading}
                  className={`btn bg-green-200 rounded-none`}
                >
                  {loading ? "Approving..." : "Approve"}
                </button>
                <button
                  onClick={handleDecline}
                  disabled={loading}
                  className={`btn bg-rose-200 rounded-none`}
                >
                  {loading ? "Declining..." : "Decline"}
                </button>
              </>
            )}
            <div className="">
           
            </div>
            
          </div>
            </div>
        </div>

      </div>
      {declineModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">Decline Article</h2>
            <textarea value={declineReason} onChange={(e) => setDeclineReason(e.target.value)} className="w-full border rounded p-2 mb-4" rows="4" placeholder="Enter decline reason"></textarea>
            <div className="flex space-x-2">
              <button onClick={handleDeclineSubmit} className="bg-red-500 text-white py-1 px-2 rounded">Submit</button>
              <button onClick={() => setDeclineModalOpen(false)} className="bg-gray-500 text-white py-1 px-2 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default NewsCard;
