import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaUser, FaRegHeart, FaShareSquare, FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";
// import toast from "react-hot-toast"
import ShareModal from "./ShareModal";

const BlogCardDetails = () => {
  const [blog, setBlog] = useState({});
  const [isLiked, setIsLiked] = useState(false); 
  const { id } = useParams();
  const blogData = useLoaderData();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    const findBlog = blogData?.find((item) => item.id == id);
    setBlog(findBlog);

    const likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];
    const foundLikedItem = likedItems.find((item) => item.id == id);
    setIsLiked(!!foundLikedItem);
  }, [id, blogData]);

  const handleEventToCarts = () => {
    // Retrieve liked items from local storage or initialize an empty array
    const likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];

    if (!isLiked) {
      // If not already liked, add the current blog to liked items
      const updatedLikedItems = [...likedItems, blog];
      localStorage.setItem("likedItems", JSON.stringify(updatedLikedItems));
      setIsLiked(true);
      Swal.fire("Success!", "Item added to favorites successfully!", "success");
    } else {
      // If already liked, remove the current blog from liked items
      const updatedLikedItems = likedItems.filter(
        (item) => item.id !== blog.id
      );
      localStorage.setItem("likedItems", JSON.stringify(updatedLikedItems));
      setIsLiked(false);
      Swal.fire("Removed!", "Item removed from favorites!", "success");
    }
  };

  const handleShare = () => {
    toggleModal(); // Show the modal when Share button is clicked
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {blog && (
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          {blog.image && (
            <img
              className="w-full h-96 object-cover object-center"
              src={blog.image}
              alt={blog.title}
            />
          )}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {blog.author && (
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src={blog.author.author_image}
                    alt={blog.author.name}
                  />
                )}
                <div>
                  <p className="font-semibold text-2xl text-gray-800 mb-1">
                    {blog.title}
                  </p>
                  {blog.author && (
                    <p className="text-sm flex items-center text-gray-600">
                      <FaUser className="mr-1" />
                      {blog.author.name}
                    </p>
                  )}
                  <p className="text-sm text-gray-600">{blog.date}</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-gray-200 text-gray-800 text-xs font-semibold rounded-full">
                {blog.category}
              </span>
            </div>
            <p className="mt-4 text-gray-700 leading-relaxed">{blog.content}</p>
            <div className="mt-6">
              <h4 className="font-semibold text-lg mb-2 text-gray-800">
                Comments:
              </h4>
              {blog.comments &&
                blog.comments.map((comment, index) => (
                  <div key={index} className="text-gray-700 text-base">
                    {comment.user}: {comment.comment}
                  </div>
                ))}
            </div>
            <div className="mt-8 flex justify-between items-center">
              <Link to="/" className="text-blue-500 hover:underline">
                Back to Home
              </Link>
              <div className="flex">
                <button
                  onClick={handleEventToCarts}
                  className="font-bold py-2 px-4 rounded flex items-center mr-2"
                >
                  {isLiked ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
                <button
                  onClick={handleShare}
                  className="font-bold py-2 px-4 rounded flex items-center"
                >
                  <FaShareSquare />
                </button>
              </div>
              {showModal && <ShareModal onClose={toggleModal} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCardDetails;
