import styles from "./CardComponent.module.css";

function CardComponent(props) {
  const menuList = props.e;
  const category = props.category;

  const listMenu = menuList.map((e) => (
    <li key={e.id}>
      <h3>{e.title}</h3> <br /> <b>{e.price}</b> <br /> <p>{e.ingredients}</p>
    </li>
  ));

  return (
    <>
      <div>
        <ul className="cards">{listMenu}</ul>
      </div>
    </>
  );
}

export default CardComponent;
