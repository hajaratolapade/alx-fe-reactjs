import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  return (
    <div>
      <h1>{recipe.title}</h1>
      <form action="#">
        <input type="text" placeholder='add comment'/>
      </form>
    </div>
  );
};

export default EditRecipeForm;