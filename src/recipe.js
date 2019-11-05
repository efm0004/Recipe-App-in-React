import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className="recipes">
            <h1>{title}</h1>
            <p> Calories: {calories}</p>
            <img className="images"src={image} alt=""></img>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    );
}

export default Recipe; 