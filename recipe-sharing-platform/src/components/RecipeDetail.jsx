import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.recipes.find((item) => item.id.toString() === id);
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-red-500">Recipe not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover rounded-md" />
      <h1 className="text-3xl font-bold mt-4">{recipe.name}</h1>
      <p className="text-gray-600 mt-2">{recipe.description}</p>

      <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
      <ul className="list-disc list-inside mt-2">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-700">{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-4">Instructions</h2>
      <ol className="list-decimal list-inside mt-2">
        {recipe.instructions.map((step, index) => (
          <li key={index} className="text-gray-700 mt-1">{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
