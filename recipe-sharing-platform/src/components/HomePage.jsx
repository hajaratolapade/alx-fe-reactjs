import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json"; // ✅ Import JSON directly

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData); // ✅ Directly use imported data
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing Platform</h1>

      {recipes.length === 0 ? (
        <p className="text-center text-gray-500">No recipes found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Link 
              to={`/recipe/${recipe.id}`} 
              key={recipe.id} 
              className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={recipe.image} 
                alt={recipe.name} 
                className="w-full h-48 object-cover" 
                loading="lazy"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{recipe.name}</h2>
                <p className="text-blue-500 mt-2">View Recipe →</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
