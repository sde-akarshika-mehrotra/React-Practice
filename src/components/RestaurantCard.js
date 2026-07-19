const RestaurantCard = (props) => {
  const { restoData } = props;
  const { image, name, cuisine, rating, cookTimeMinutes } = restoData || {};
  return (
    <div className="resto-cards">
      <img className="resto-logo" src={image} alt="resto-logo" />

      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4> {rating}</h4>
      <h4>{cookTimeMinutes} mins</h4>
    </div>
  );
};

export default RestaurantCard;