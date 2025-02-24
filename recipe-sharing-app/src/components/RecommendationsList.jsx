import { useRecipeStore } from './recipeStore';
import { useEffect } from 'react';

const RecommendationList = () => {
  const { recommendation, generateRecommendations } = useRecipeStore();
  
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2> Recommendation </h2>
      {recommendation.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationList;