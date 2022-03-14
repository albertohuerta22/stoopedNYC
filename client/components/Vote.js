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
    // dispatch(fetchProducts());
  }, []);

  const upVote = () => {
    for (let i = 0; i < products.length; i++) {
      let user = products[i];
      user.votes++;
    }
  };

  const downVote = () => {
    for (let i = 0; i < products.length; i++) {
      let user = products[i];
      user.votes--;
    }
  };

  return (
    // if loggedIn
    // already voted
    <div>
      <button name="upVote" type="button" onClick={incrementquantity}>
        👍
      </button>
      {quantity}
      {/* {products.map((product, idx) => {
        return product.id === idx ? 0 : null;
      })} */}
      <button name="downVote" type="button" onClick={decrementquantity}>
        👎
      </button>
    </div>
  );
};

export default Vote;

// home page needs reviews, import photos/
// color pallette
