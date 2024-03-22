import { useEffect, useState } from "react";
import MyFavoriteCard from "./MyFavoriteCard/MyFavoriteCard";

const MyFavorite = () => {
  const [favorites, setFavorites] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const favoritesData = JSON.parse(localStorage.getItem("carts"));
    if (favoritesData && favoritesData.length > 0) {
      setFavorites(favoritesData);
    } else {
      setNoFound(true);
    }
  }, []);

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("carts", JSON.stringify(updatedFavorites));
  };

  const handleRemoveAllFavorites = () => {
    localStorage.removeItem("carts");
    setFavorites([]);
    setNoFound(true);
  };

  return (
    <div className="mt-32 mb-16">
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">
          No Favorites Found
        </p>
      ) : (
        <div>
          {favorites.length > 0 && (
            <button
              onClick={handleRemoveAllFavorites}
              className="px-4 py-2 text-sm mt-20 mb-10 text-gray-800 font-semibold rounded-full border border-gray-800 shadow-md absolute top-10 right-10 hover:bg-gray-200 hover:text-gray-900 transition duration-300"
            >
              Clear All Favorites
            </button>
          )}
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-auto sm:mx-4 md:mx-8 lg:mx-12 xl:mx-20">
            {isShow
              ? favorites.map((favorite) => (
                  <MyFavoriteCard
                    key={favorite.id}
                    favorite={favorite}
                    onRemove={() => handleRemoveFavorite(favorite.id)}
                  />
                ))
              : favorites
                  .slice(0, 4)
                  .map((favorite) => (
                    <MyFavoriteCard
                      key={favorite.id}
                      favorite={favorite}
                      onRemove={() => handleRemoveFavorite(favorite.id)}
                    />
                  ))}
          </div>

          <br />
          {favorites.length > 4 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="px-4 py-2 text-sm   text-gray-800 font-semibold rounded-full border border-gray-800 shadow-md absolute mb-[40vh] left-10 hover:bg-gray-200 hover:text-gray-900 transition duration-300"
            >
              {isShow ? "Show Less ...." : "Show All ...."}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MyFavorite;
