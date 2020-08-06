import React, { useEffect, useState } from "react";
import "../Style/App.css";
import Recipe from "./Recipe";
import Navbar from "./Navbar";
import axios from "axios";

function App() {
  const API_ID = "1616fef6";
  const API_KEY = "84250793287326342cf0209c666d26fd";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
      )
      .then((res) => {
        setRecipes(res.data.hits);
        console.log(res.data.hits);
      });
  }, [query]);

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (event) => {
    setQuery(search);
    event.preventDefault();
  };

  return (
    <div className="App">
      <Navbar />
      <div className={"search__bar"}>
        <form onSubmit={getSearch} className={"search__form"}>
          <input
            onChange={updateSearch}
            value={search}
            className={"search__input"}
            type={"text"}
            placeholder={"search a meal"}
          />
          <button className={"search__button"}>{"Search"}</button>
        </form>
      </div>

      {recipes.map((recipe) => (
        <Recipe
          key={Math.random()}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;
