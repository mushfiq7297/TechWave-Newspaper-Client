import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={closeModal}
          ></div>
          <div className="bg-white rounded-lg p-8 shadow-lg relative z-10">
            <h2 className="text-xl font-semibold mb-4">
              Subscribe to our Newsletter
            </h2>
            <p className="mb-4">
              Stay updated with our latest news and offers. Subscribe now!
            </p>
            <Link to="/subscription">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          
            >
              Subscribe
            </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
