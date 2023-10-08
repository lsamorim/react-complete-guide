import "./Card.css";

function Card(props) {
  const defaultClass = "card";
  const classes =
    props.className == undefined
      ? defaultClass
      : defaultClass + " " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
