import React, { useState } from 'react';

const Vote = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <button type="button" onClick={() => setQuantity(quantity + 1)}>
        👍 {quantity}
      </button>
      <button type="button" onClick={() => setQuantity(quantity - 1)}>
        👎 {quantity}
      </button>
    </div>
  );
};

export default Vote;
