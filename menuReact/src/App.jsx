import { useState } from "react";
import CardComponent from "./CardComponent/CardComponent";
import ButtonComponent from "./ButtonComponent/ButtonComponent";
import style from "./App.module.css";
import imageForSpaghetti from "./assets/spaghetti-bolognese.jpg";
import imageForChickenSoup from "./assets/creamy-chicken-soup.jpeg";
import imageForMargheritaPizza from "./assets/margherita-pizza.jpg";
import imageForSushi from "./assets/sushi-mix.jpeg";
import imageForCaesarSalad from "./assets/caesar-salad.jpg";
import imageForBrownie from "./assets/brownie-with-ice-cream.jpg";
import imageForTaco from "./assets/taco-plate.jpg";
import imageForPancakes from "./assets/pancakes-with-jam.jpg";
import imageForShrimp from "./assets/shrimp-with-lemon.jpeg";
import imageForEntrecote from "./assets/entrecote-with-vegetables.png";

function App() {
  const menu = [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      price: "159 kr",
      ingredients: "Spaghetti, meat sauce, parmesan",
      category: "Main course",
      image: imageForSpaghetti,
    },
    {
      id: 2,
      title: "Creamy Chicken Soup",
      price: "129 kr",
      ingredients: "Chicken, cream, carrots, celery",
      category: "Starter",
      image: imageForChickenSoup,
    },
    {
      id: 3,
      title: "Margherita Pizza",
      price: "169 kr",
      ingredients: "Tomato sauce, mozzarella, basil",
      category: "Main course",
      image: imageForMargheritaPizza,
    },
    {
      id: 4,
      title: "Sushi Mix",
      price: "229 kr",
      ingredients: "Salmon, tuna, shrimp, rice",
      category: "Main course",
      image: imageForSushi,
    },
    {
      id: 5,
      title: "Caesar Salad",
      price: "139 kr",
      ingredients: "Romaine lettuce, chicken, parmesan, dressing",
      category: "Starter",
      image: imageForCaesarSalad,
    },
    {
      id: 6,
      title: "Brownie with Ice Cream",
      price: "89 kr",
      ingredients: "Brownie, vanilla ice cream, chocolate sauce",
      category: "Dessert",
      image: imageForBrownie,
    },
    {
      id: 7,
      title: "Taco Plate",
      price: "199 kr",
      ingredients: "Minced meat, corn, cheese, guacamole",
      category: "Main course",
      image: imageForTaco,
    },
    {
      id: 8,
      title: "Pancakes with Jam",
      price: "99 kr",
      ingredients: "Pancakes, strawberry jam, sugar",
      category: "Dessert",
      image: imageForPancakes,
    },
    {
      id: 9,
      title: "Shrimp with Lemon",
      price: "149 kr",
      ingredients: "Shrimp, lemon, dill, bread",
      category: "Starter",
      image: imageForShrimp,
    },
    {
      id: 10,
      title: "Entrecôte with Vegetables",
      price: "289 kr",
      ingredients: "Entrecôte, asparagus, potatoes, pepper sauce",
      category: "Main course",
      image: imageForEntrecote,
    },
  ];

  const [displayedMenu, setDisplayedMenu] = useState(menu);
  const [activeCategory, setActiveCategory] = useState("All");

  const filterMenu = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setDisplayedMenu(menu);
    } else {
      const filteredItems = menu.filter((item) => item.category === category);
      setDisplayedMenu(filteredItems);
    }
  };

  return (
    <>
      <div className={style.gridContainer}>
        <header className={style.header}></header>
        <nav className={style.sidebar}>
          <ButtonComponent
            menuList={menu}
            filterMenu={filterMenu}
            activeCategory={activeCategory}
          />
        </nav>
        <main className={style.content}>
          <CardComponent e={displayedMenu} />
        </main>
      </div>
    </>
  );
}

export default App;
