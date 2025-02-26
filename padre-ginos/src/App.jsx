import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Ginos!</h1>
      <Pizza name="Pepperoni" description="Pepperoni, cheese, tomato sauce" />
      <Pizza name="Margherita" description="Cheese, tomato sauce" />
      <Pizza
        name="Hawaiian"
        description="Ham, pineapple, cheese, tomato sauce"
      />
      <Pizza
        name="Vegetarian"
        description="Mushrooms, peppers, onions, cheese, tomato sauce"
      />
    </div>
  );
};

const container = document.getElementById("root");

const root = createRoot(container);
root.render(<App />);
