import Fooditem from "./fooditem/Fooditem";

export default function FoodList({ foodData, setFoodID }) {
  return (
    <div>
      {foodData.map((food, id) => (
        <Fooditem setFoodID={setFoodID} key={id} food={food} />
      ))}
    </div>
  );
}
 