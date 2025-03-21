import { useState } from 'react';


const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      id: Date.now(),
      title,
      description,
      ingredients: ingredients.split(',').map((item) => item.trim()), // Convert string to array
      steps: steps.split('.').map((item) => item.trim()), // Convert string to array
    };

    addRecipe(newRecipe);

    // Reset fields
    setTitle('');
    setDescription('');
    setIngredients('');
    setSteps('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 border rounded mb-2"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full p-2 border rounded mb-2"
      />
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients (comma separated)"
        className="w-full p-2 border rounded mb-2"
      />
      <textarea
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        placeholder="Steps (separate with periods)"
        className="w-full p-2 border rounded mb-2"
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
