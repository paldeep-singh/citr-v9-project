import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Ginos!</h1>
      <Pizza
        name="Pepperoni"
        description="Pepperoni, cheese, tomato sauce"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Margherita"
        description="Cheese, tomato sauce"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="Americano"
        description="French fries, hot dogs, n stuff"
        image={"/public/pizzas/big_meat.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");

const root = createRoot(container);
root.render(<App />);
