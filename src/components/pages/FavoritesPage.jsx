import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../redux/actions";

function FavoritesPage() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const removeFromFavoritesHandler = (article) => {
    dispatch(removeFromFavorites(article));
  };

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>You have no favorites yet.</p>
      ) : (
        <ul>
          {favorites.map((article) => (
            <li key={article.id}>
              {article.title}{" "}
              <button onClick={() => removeFromFavorites(article)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesPage;
