import { useState } from "react";
import CardComponent from "./CardComponent/CardComponent.jsx";
import NavComponent from "./NavComponent/NavComponent.jsx";
import style from "./App.module.css";

function App() {
  const menu = [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      price: "159 kr",
      ingredients: "Spaghetti, meat sauce, parmesan",
      category: "Main course",
      image: "spaghetti-bolognese.jpg",
    },
    {
      id: 2,
      title: "Creamy Chicken Soup",
      price: "129 kr",
      ingredients: "Chicken, cream, carrots, celery",
      category: "Starter",
      image: "creamy-chicken-soup.jpeg",
    },
    {
      id: 3,
      title: "Margherita Pizza",
      price: "169 kr",
      ingredients: "Tomato sauce, mozzarella, basil",
      category: "Main course",
      image: "margherita-pizza.jpg",
    },
    {
      id: 4,
      title: "Sushi Mix",
      price: "229 kr",
      ingredients: "Salmon, tuna, shrimp, rice",
      category: "Main course",
      image: "sushi-mix.jpeg",
    },
    {
      id: 5,
      title: "Caesar Salad",
      price: "139 kr",
      ingredients: "Romaine lettuce, chicken, parmesan, dressing",
      category: "Starter",
      image: "caesar-salad.jpg",
    },
    {
      id: 6,
      title: "Brownie with Ice Cream",
      price: "89 kr",
      ingredients: "Brownie, vanilla ice cream, chocolate sauce",
      category: "Dessert",
      image: "brownie-with-ice-cream.jpg",
    },
    {
      id: 7,
      title: "Taco Plate",
      price: "199 kr",
      ingredients: "Minced meat, corn, cheese, guacamole",
      category: "Main course",
      image: "taco-plate.jpg",
    },
    {
      id: 8,
      title: "Pancakes with Jam",
      price: "99 kr",
      ingredients: "Pancakes, strawberry jam, sugar",
      category: "Dessert",
      image: "pancakes-with-jam.jpg",
    },
    {
      id: 9,
      title: "Shrimp with Lemon",
      price: "149 kr",
      ingredients: "Shrimp, lemon, dill, bread",
      category: "Starter",
      image: "shrimp-with-lemon.jpeg",
    },
    {
      id: 10,
      title: "Entrecôte with Vegetables",
      price: "289 kr",
      ingredients: "Entrecôte, asparagus, potatoes, pepper sauce",
      category: "Main course",
      image: "entrecote-with-vegetables.png",
    },
  ];

  const [displayedMenu, setDisplayedMenu] = useState(menu);

  return (
    <>
      <div className={style.gridContainer}>
        <header className={style.header}>
          <img src="logo.png" alt="logo" />
          <div className={style.headerText}>
            <h1>The Gourmet Table</h1>
            <p>Kristiansund</p>
          </div>
        </header>
        <nav className={style.sidebar}>
          <NavComponent />
        </nav>
        <main className={style.content}>
          <CardComponent e={displayedMenu} />
        </main>
      </div>
    </>
  );
}

export default App;
