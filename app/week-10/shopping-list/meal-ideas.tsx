"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


type MealProp = {
  idMeal: String;
  strMeal: String;
  strMealThumb: String;
};
type MealList = {
  meals: MealProp[];
}

async function fetchMealIdeas(input:String) {
    let data:any;
    let mealsList: MealProp[] = [];

    const callApi = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`,
      );
      data = await response.json();
      
      console.log("meals:", mealsList);
      
    } catch (error) {
      console.error("Error calling API:", error);
    }
    //map data to readable output
    data.meals.forEach((i:any) => {
        let temp: MealProp = {
          strMeal : i.strMeal,
          strMealThumb :i.strMealThumb,
          idMeal : i.idMeal
        }
        mealsList.push(temp)
      })
  };

  await callApi();
  return(mealsList);
}

export default function MealIdeas() {
  const [ingredient, setIngredient] = useState("");
  const [meals, setMeals] = useState<any[]>([]);

  const loadMealIdeas = async () => {
   const temp = await fetchMealIdeas(`${ingredient}`);
   setMeals(temp)
  }

  useEffect(() => {
    if (ingredient) {
      console.log("Ingredient changed:", ingredient);
    }
  }, [ingredient]);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngredient(e.target.value);
  };
  
  return (
    <div>
      <input
        type="text"
        placeholder="Enter item"
        className="border border-orange-400 m-2 p-1"
        value={ingredient}
        onChange={onChangeText}
      />
      <button 
        className={`place-items-center text-blue-950 border-2 bg-blue-300 border-orange-400 m-2 p-1`}
        onClick={loadMealIdeas}>Get Meal Ideas</button>
      <p>{`Try these meals with ${ingredient}`}</p>  
      {meals.map((meal:MealProp, index:any)=>
            <div key={index}>
                <div>
                    <li className= "border 2 border-orange-400 m-2 p-2">
                        <p className = "font-medium">{`${meal.strMeal} Meal ID: ${meal.idMeal}`}</p> 
                        <p></p>
                        <img src={`${meal.strMealThumb}`} height={200} width={200}/>
                    </li>
                </div>
            </div>)}
    </div>
      
      
  
  );
}
