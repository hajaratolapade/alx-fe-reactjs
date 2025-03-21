import React from "react";
import { Link } from "react-router-dom";

const recipes = [
  { id: "1", title: "Spaghetti Bolognese", image: "https://source.unsplash.com/400x300/?pasta,food" },
  { id: "2", title: "Chicken Curry", image: "https://source.unsplash.com/400x300/?curry,food" }
];

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="block bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-blue-500 mt-2">View Recipe →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
