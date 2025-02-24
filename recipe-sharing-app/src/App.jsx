import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router> {/* Wrap Routes with Router */}
      <Routes>
        <Route path="/" element={<RecipeList />} /> 
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  )
}

export default App
