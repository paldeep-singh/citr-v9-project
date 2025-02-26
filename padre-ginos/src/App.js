import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Padre Ginos!"),
    React.createElement(Pizza, {
      name: "Pepperoni",
      description: "Pepperoni, cheese, tomato sauce",
    }),
    React.createElement(Pizza, {
      name: "Margherita",
      description: "Cheese, tomato sauce",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian",
      description: "Ham, pineapple, cheese, tomato sauce",
    }),
    React.createElement(Pizza, {
      name: "Vegetarian",
      description: "Mushrooms, peppers, onions, cheese, tomato sauce",
    }),
  );
};

const container = document.getElementById("root");

const root = createRoot(container);
root.render(React.createElement(App)); // Render App component inside root element in index.html
