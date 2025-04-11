import React, { useState } from "react";
import IngredientList from "./IngredientList";

const BurgerStack = () => {
  const availableIngredients = [
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
    { name: "Cheddar Cheese", color: "#FDE18B" },
    { name: "Swiss Cheese", color: "#F1E1A8" },
  ];

  // const [ingredientsChart, setIngredientsChart] =
  //   useState(availableIngredients);
  const [ingredientsMake, setIngredientsMake] = useState([]);

  const handleAddItem = (item) => {
    setIngredientsMake([...ingredientsMake, item]);
  };

  const handleRemoveItem = (item) => {
    setIngredientsMake(
      ingredientsMake.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section className="selection">
        <IngredientList
          title="Ingredient List"
          ingredient={availableIngredients}
          handleAddItem={handleAddItem}
        />
        <IngredientList
          title="Ingredients Make"
          ingredient={ingredientsMake}
          handleRemoveItem={handleRemoveItem}
        />
      </section>
      {/* <li style={{ backgroundColor: ingredient.color }}>{ingredient.name}</li> */}
    </main>
  );
};

export default BurgerStack;
