import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../store/productsReducer';
import { useDispatch, useSelector } from 'react-redux';

const Vote = () => {
  const [quantity, setQuantity] = useState(0);
  const incrementquantity = () => setQuantity(quantity + 1);
  const decrementquantity = () => setQuantity(quantity - 1);

  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    // if loggedIn
    // already voted
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
