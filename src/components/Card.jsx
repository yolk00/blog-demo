import PropTypes from "prop-types";

export default function Card(props) {
  return (
    <a href="#" className="card">
      <div className="card--img--wrapper">
        <img src={props.item.image.url} alt={props.item.image.altText} />
        {/* <span>{props.item.tag}</span> */}
      </div>
      <div className="card--text">
        <h2>{props.item.title}</h2>
        <p>{props.item.description}</p>
        <span className="bold underline">Read More</span>
      </div>
    </a>
  );
}

Card.propTypes = {
  item: PropTypes.array,
};
