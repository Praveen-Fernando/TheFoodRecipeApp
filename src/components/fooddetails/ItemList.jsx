import Item from "./Item";

export default function ItemList({ food, foodId, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <Item item={item} key={foodId} />
        ))
      )}
    </div>
  );
}
