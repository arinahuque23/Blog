/* eslint-disable react/prop-types */

import { FaFacebook, FaTwitter, FaWhatsapp, FaTelegram } from "react-icons/fa";

const ShareModal = ({ onClose }) => {
  const handleShare = (platform) => {
    // Open the sharing links in a new tab
    switch (platform) {
      case "Facebook":
        window.open("https://www.facebook.com/", "_blank");
        break;
      case "Twitter":
        window.open("https://twitter.com/", "_blank");
        break;
      case "WhatsApp":
        window.open("https://web.whatsapp.com/", "_blank");
        break;
      case "Telegram":
        window.open("https://web.telegram.org/", "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Share this post</h2>
        <div className="flex justify-around">
          <button onClick={() => handleShare("Facebook")} className="text-blue-500">
            <FaFacebook size={32} />
          </button>
          <button onClick={() => handleShare("Twitter")} className="text-blue-400">
            <FaTwitter size={32} />
          </button>
          <button onClick={() => handleShare("WhatsApp")} className="text-green-400">
            <FaWhatsapp size={32} />
          </button>
          <button onClick={() => handleShare("Telegram")} className="text-blue-200">
            <FaTelegram size={32} />
          </button>
        </div>
        <button onClick={onClose} className="mt-4 text-gray-500">Close</button>
      </div>
    </div>
  );
};

export default ShareModal;
