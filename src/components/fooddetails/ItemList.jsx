export default function ItemList({ food }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item) => <ItemList item={item} />)
      )}
    </div>
  );
}
