const RestaurantCard = (props) => {
  const { restoData } = props;
  const { image, name, cuisine, rating, cookTimeMinutes } = restoData || {};
  return (

    <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200 rounded-lg">
      <img className="rounded-lg" src={image} alt="resto-logo" />

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisine}</h4>
      <h4> {rating}</h4>
      <h4>{cookTimeMinutes} mins</h4>
    </div>
  );
};

export default RestaurantCard;