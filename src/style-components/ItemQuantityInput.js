import React, {useState} from "react";

function ItemQuantityInput() {
  const [itemQuantity, setItemQuantity] = useState(1);

  const quantityDecrement = () => {
    if (itemQuantity === 0) return;

    return setItemQuantity(itemQuantity - 1);
  };

  return (
    <div className="item-quantity-container">
      <button onClick={quantityDecrement} className="quantity-btn left-btn">
        -
      </button>
      <input
        placeholder={itemQuantity}
        name="item-quantity"
        id="item-quantity"
        value={itemQuantity}
        onChange={(event) => {
          setItemQuantity(parseInt(event.target.value));
        }}
      />
      <button
        onClick={() => {
          setItemQuantity(itemQuantity + 1);
        }}
        className="quantity-btn"
      >
        +
      </button>
    </div>
  );
}

export default ItemQuantityInput;
