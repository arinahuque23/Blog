/* eslint-disable react/prop-types */


const MyFavoriteCard = ({ favorite, onRemove }) => {
  const {
    id,
    image = '',
    title = '',
    date = '',
    content = '',
    category = '',
  } = favorite;

  const handleRemove = () => {
    // Remove item from localStorage
    const favoritesData = JSON.parse(localStorage.getItem('carts'));
    const updatedFavorites = favoritesData.filter((item) => item.id !== id);
    localStorage.setItem('carts', JSON.stringify(updatedFavorites));

    // Trigger the onRemove callback to update the UI
    onRemove(id);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img className="w-full h-64 object-cover object-center" src={image} alt={title} />
      <div className="p-6">
        <p className="font-semibold text-lg mb-2">{title}</p>
        <p className="text-sm text-gray-600">{date}</p>
        <p className="mt-4 text-gray-700">{content}</p>
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={handleRemove}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Remove
          </button>
          <span className="px-3 py-1 bg-gray-200 text-gray-800 text-xs font-semibold rounded-full">
            {category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyFavoriteCard;
