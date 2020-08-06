import React from "react";
import "../Style/Recipe.css";

export default function Recipe(props) {
  const { recipe } = props;
  return (
    <div className={"recipes"}>
      <h4 className={"card__title"}>{props.title}</h4>
      <div className={"card__body"}>
        <div className={"card__left"}>
          <img className={'card__image'} src={props.image} alt="" />
          <h3 className={'card__calories'}>{props.calories.toFixed(2) + " Calories"}</h3>
        </div>
        <div className={"card__right"}>
          <ol>
            {props.ingredients.map((each) => (
              <li key={Math.random()}>{each.text}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
