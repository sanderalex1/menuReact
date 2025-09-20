import styles from "./ButtonComponent.module.css";

function ButtonComponent({ menuList, filterMenu, activeCategory }) {
  const categories = menuList.map((e) => e.category);

  const categoryList = new Set(categories);

  const categoryButtons = Array.from(categoryList).map((category) => (
    <button
      onClick={() => filterMenu(category)}
      className={`${styles.button} ${
        category === activeCategory ? styles.active : ""
      }`}
      key={category}
    >
      {category}
    </button>
  ));

  return (
    <div className={styles.categories}>
      <input type="text" />
      <button
        onClick={() => {
          filterMenu("All");
        }}
        className={`${styles.button} ${
          "All" === activeCategory ? styles.active : ""
        }`}
      >
        All
      </button>
      {categoryButtons}
    </div>
  );
}

export default ButtonComponent;
