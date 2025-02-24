import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore.js';

const RecipeList = () => {
  const { recipes, favorites, addFavorite, removeFavorite, filteredRecipes, searchTerm, setSearchTerm } = useRecipeStore();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleFavorite = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <div>
      <h1>Recipe List</h1>

      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <ul>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
              <button onClick={() => toggleFavorite(recipe.id)}>
              {favorites.includes(recipe.id) ? '❤️ Remove Favorite' : '🤍 Add to Favorites'}
            </button>
            </li>
          ))
        ) : (
          <p>No matching recipes found.</p>
        )}
      </ul>
    </div>
  );
};

export default RecipeList;