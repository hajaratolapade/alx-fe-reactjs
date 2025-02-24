// RecipeList component
import { Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore.js';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>
         <h1>Recipe List</h1>
         <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
      </div>
    );
  };
  
  export default RecipeList;