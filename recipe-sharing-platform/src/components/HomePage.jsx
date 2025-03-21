import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecipes = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(process.env.PUBLIC_URL + "/data.json");
      if (!response.ok) throw new Error("Failed to fetch recipes");
      
      const data = await response.json();
      setRecipes(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing Platform</h1>

      {isLoading && <p className="text-center text-gray-500">Loading recipes...</p>}
      
      {error && (
        <div className="text-center text-red-500">
          <p>{error}</p>
          <button 
            onClick={fetchRecipes} 
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Retry
          </button>
        </div>
      )}

      {!isLoading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
