// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
  return (
    <div className="BakeryItem">
      <h1>{props.item.name}</h1>
      <p>{props.item.description}</p>
      <img src={props.item.image} />
      <p>{props.item.price}</p>
      <button
        onClick={() => {
          props.addtoCart(props.item);
          props.total(props.item);
        }}
      >
        {" "}
        Add to cart
      </button>
    </div>
  );
}
