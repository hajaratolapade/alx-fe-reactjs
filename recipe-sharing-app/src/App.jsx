import { Routes, Route } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'
import './App.css'

function App() {
  return (

    <div>
      <h1>Recipe Sharing App</h1>

      <Routes>
        <Route path="/" element={<RecipeList />} /> 
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>

      </div>
  )
}

export default App
