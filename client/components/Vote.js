import React, { useState } from 'react';

const Vote = () => {
  const [quantity, setQuantity] = useState(0);
  const incrementquantity = () => setQuantity(quantity + 1);
  const decrementquantity = () => setQuantity(quantity - 1);
  return (
    <div>
      <button type="button" onClick={incrementquantity}>
        👍
      </button>
      {quantity}
      <button type="button" onClick={decrementquantity}>
        👎
      </button>
    </div>
  );
};

export default Vote;
