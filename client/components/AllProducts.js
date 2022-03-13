import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../store/productsReducer';
// import { startSession } from "pg/lib/sasl";
import Vote from './Vote';

function AllProducts() {
  const products = useSelector((state) => state.allProducts);
  const { isAdmin } = useSelector((state) => state.auth);
  //   const [AllFTs, setAllFTs] = useState([]);
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

      {products.map((item) => (
        <div>
          <Link key={item.id} to={`/products/${item.id}`}>
            <h1>{item.name}</h1>
            <img
              src={item.imageUrl}
              style={{ width: '200px', height: '200px' }}
            />
            <br />
          </Link>
          <Vote />
          {!isAdmin ? null : (
            <>
              <button>edit</button>
              <button>delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  ) : (
    <div>{'loading'}</div>
  );
}

export default AllProducts;
