import React from 'react'
import CheatMealPic from '../../Assets/CheatMeal.png'

const CheatMeal = () => {
    return (
        <div>
        <h3>Cheat Meal</h3>
            <div className = 'cheat-meal'>
            <img src = {CheatMealPic} alt='cheat meal snapshot' className = 'cheat-meal-pic' />
            <p className = 'project-desc'>For my second piece, I created an app that allows a user to make meal decisions based off of calories, protein, fat, and carbs. Unlike other apps, mine is designed around the main three fast food restaurants: McDonald's, Burger King, or Wendy's.
            <br />
            <br />
            <a href = 'http://amazing-mark.surge.sh/'>Visit the Cheat Meal App</a>
            <br />
            <br />
            Technologies Used: React, External API 
            </p>
        </div>
        </div>
    )
}

export default CheatMeal