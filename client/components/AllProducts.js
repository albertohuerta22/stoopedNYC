import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../store/productsReducer';
// import { startSession } from "pg/lib/sasl";
import Vote from './Vote';

function AllProducts() {
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return products ? (
    <div>
      <form action="/" method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search Stooped items!</span>
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="Search stooped!"
          name="s"
        />
        <button type="submit">Search</button>
      </form>
      <br />
      <br />
      <Link to={'/mapview'}>
        <h1>View Map</h1>
      </Link>
      <div className="allP">
      {products.map((item) => (
        <div className="products" key={item.id} >
          <Link to={`/products/${item.id}`}>
            <h2>{item.name}</h2>
            <br />
            <img
              src={item.imageUrl}
              style={{ width: '200px', height: '200px' }}
              />
            <br />
          </Link>
          <Vote />
          <br />
        </div>
      ))}
      </div>
    </div>
  ) : (
    <div>{'loading'}</div>
  );
}

export default AllProducts;
