import styles from "./CardComponent.module.css";

function CardComponent(props) {
  const menuList = props.e;

  const listMenu = menuList.map((e, index) => (
    <li key={e.id} className={styles.menuItem}>
      <div className={styles.menuItemText}>
        <h3>{e.title}</h3> <h1>{e.price}</h1> <br />
        <p>{e.ingredients}</p>
      </div>
      <img src={e.image} alt={e.title} className={styles.menuItemImage} />
    </li>
  ));

  return (
    <>
      <div>
        <ul className={styles.cards}>{listMenu}</ul>
      </div>
    </>
  );
}

export default CardComponent;
