import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddRecipeForm from "./components/AddRecipeForm";
import Layout from "./components/Layout"; // Import Layout

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="recipe/:id" element={<RecipeDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="add-recipe" element={<AddRecipeForm />} />
  </Route>
</Routes>
</Router>
);
}

export default App;
