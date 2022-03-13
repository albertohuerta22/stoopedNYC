import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, deleteProduct } from '../store/productsReducer';
// import { startSession } from "pg/lib/sasl";

function AllProducts() {
  const products = useSelector((state) => state.allProducts);
  const { isAdmin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const handleDelete = (e, itemId) =>{
    e.preventDefault();
    dispatch(deleteProduct(itemId))

  }
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

      {products.map((item) => (
        <Link key={item.id} to={`/products/${item.id}`}>
          <div>
            <h1>{item.name}</h1>
            <img
              src={item.imageUrl}
              style={{ width: '200px', height: '200px' }}
            />
            <br />
            {!isAdmin ? null : (
              <>
                <button>edit</button>
                <button onClick={(e) => handleDelete(e,item.id)}>delete</button>
              </>
            )}
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <div>{'loading'}</div>
  );
}

export default AllProducts;
