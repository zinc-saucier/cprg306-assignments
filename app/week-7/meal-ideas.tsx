"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ItemProps } from "./item";

type MealProp = {
  idMeal: any;
  strMeal: any;
  strMealThumb: any;
};

export default function MealIdeas(item: ItemProps) {
  const [ingredient, setIngredient] = useState("");
  const [meals, setMeals] = useState([]);

  function loadMealIdeas() {
    fetchMealIdeas(item);
  }

  useEffect(() => {
    if (item.name) {
      console.log("Ingredient changed:", item.name);
    }
  }, [item.name]);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngredient(e.target.value);
  };
  const fetchMealIdeas = async ({ name }: ItemProps) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`,
      );
      const meals = await response.json();
      setMeals(meals);
      console.log("meals:", meals);
      //map data to readable output
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter item"
        className="border border-amber-800 rounded-md p-2"
        value={item.name}
        onChange={onChangeText}
      />
      {/* {meals && (
        <div>
          <ul>
            {meals.map((meal: MealProp) => (
              <li
                key={meal.idMeal}
                name={meal.strMeal}
                pic={meal.strMealThumb}
              />
            ))}
          </ul>
          
        </div>
      )} */}
      <button onClick={loadMealIdeas}>Get Meal Ideas</button>
    </div>
  );
}
