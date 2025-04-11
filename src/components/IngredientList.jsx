import React from "react";
import "./IngredientList.css";

const IngredientList = (props) => {
  return (
    <div className="ingredient-list">
      <h2>{props.title}</h2>
      {props.ingredient.length ? (
        <ul>
          {props.ingredient.map((item) => (
            <li key={item.name} style={{ backgroundColor: item.color }}>
              <p>{item.name}</p>
              {props.handleAddItem ? (
                <button onClick={() => props.handleAddItem(item)}>+</button>
              ) : (
                <button onClick={() => props.handleRemoveItem(item)}>X</button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Empty</p>
      )}
    </div>
  );
};

export default IngredientList;
