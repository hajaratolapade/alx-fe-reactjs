import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import './App.css'

function App() {
  return (
    <Router>
    <div>
      <h1>Recipe Sharing App</h1>

      <Routes>
        <Route path="/" element={<RecipeList />} /> 
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
