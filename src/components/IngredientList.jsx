import React from "react";
import "./IngredientList.css";

const IngredientList = (props) => {
  return (
    <div className="ingredient-list">
      {props.ingredient.length ? (
        <ul>
          {props.ingredient.map((item, index) => (
            <li key={index} style={{ backgroundColor: item.color }}>
              <p>{item.name}</p>
              {props.handleAddItem ? (
                <button onClick={() => props.handleAddItem(item)}>+</button>
              ) : (
                <button onClick={() => props.handleRemoveItem(index)}>X</button>
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
