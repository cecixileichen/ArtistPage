import React, { useEffect } from 'react';
import '../css/RecipeDetail.css';
import '../css/App.css';
import { useParams } from 'react-router-dom';
import { recipes } from '../data/recipes'; // Import the recipe array

function RecipeDetail() {
    const { id } = useParams(); // Get the author from the URL
    const recipe = recipes.find((r) => r.id === id);  // Find the recipe by author

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 

    if (!recipe) {
    return <h2>Recipe not found!</h2>;
    }

    return (
    <div className="Recipe-detail">
        <img src={recipe.image} alt={recipe.title} className='Recipe-detail-image'/>
        <p className='Recipe-detail-title'>{recipe.title}</p>
        <p className='Recipe-detail-author'>{recipe.author}</p>
        <p className='Recipe-detail-story'>{recipe.story}</p>
        <p className='Recipe-detail-sub-title'>Ingredients</p>
        {recipe.ingredients.map((ingredient) => (
            <p className='Recipe-detail-text'>{ingredient}</p>
        ))}
        <p className='Recipe-detail-sub-title'>Steps</p>
        {recipe.steps.map((step) => (
            <p className='Recipe-detail-text'>{step}</p>
        ))}
        <p className='Page-bottom'></p>
    </div>
    );
}

export default RecipeDetail;
