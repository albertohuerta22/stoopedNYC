import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
 import { Link } from "react-router-dom";
import { fetchProducts } from "../store/productsReducer";
// import { startSession } from "pg/lib/sasl";

function AllProducts(){

  const  products  = useSelector(state => state.allProducts);
  const { isAdmin } = useSelector(state => state.auth);
//   const [AllFTs, setAllFTs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
   }, []);
    return products ? (
      <div>
        {products.map((item) => (
          <Link key={item.id} to={`/products/${item.id}`}>
            <div>
              <h1>{item.name}</h1>
              <img
                src={item.imageUrl}
                style={{ width: "200px", height: "200px" }}
              />
              <br />
              {!isAdmin? null : (
                <>
                  <button>edit</button>
                  <button>delete</button>
                </>
              )}
            </div>
          </Link>
        ))}
      </div>
    ) : (
      <div>{"loading"}</div>
    );
  }





export default AllProducts