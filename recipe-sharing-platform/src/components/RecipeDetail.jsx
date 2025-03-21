import React from "react";
import { useParams } from "react-router-dom";

const recipes = [
  {
    id: "1",
    title: "Spaghetti Bolognese",
    ingredients: [
      "200g spaghetti",
      "100g minced beef",
      "1 onion (chopped)",
      "2 cloves garlic (minced)",
      "400g canned tomatoes",
      "Salt & Pepper",
      "Parmesan cheese"
    ],
    instructions: [
      "Boil spaghetti in salted water until al dente.",
      "Sauté onions and garlic until soft.",
      "Add minced beef and cook until browned.",
      "Pour in canned tomatoes and simmer for 15 minutes.",
      "Season with salt & pepper and serve with spaghetti.",
      "Top with Parmesan cheese."
    ],
    image: "https://source.unsplash.com/600x400/?pasta,food"
  },
  {
    id: "2",
    title: "Chicken Curry",
    ingredients: [
      "2 chicken breasts (diced)",
      "1 onion (chopped)",
      "2 cloves garlic (minced)",
      "1 tbsp curry powder",
      "400ml coconut milk",
      "Salt & Pepper",
      "Fresh coriander"
    ],
    instructions: [
      "Sauté onions and garlic until fragrant.",
      "Add diced chicken and cook until golden brown.",
      "Sprinkle curry powder and mix well.",
      "Pour in coconut milk and let simmer for 20 minutes.",
      "Season with salt & pepper and garnish with coriander."
    ],
    image: "https://source.unsplash.com/600x400/?curry,food"
  }
];

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === id);

  if (!recipe) {
    return <h2 className="text-center text-2xl mt-10 text-red-500">Recipe not found!</h2>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-4 text-center">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      
      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-700">{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <ol className="list-decimal list-inside space-y-2">
        {recipe.instructions.map((step, index) => (
          <li key={index} className="text-gray-700">{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
