import React, { useState, useEffect } from "react";
//import { connect } from "react-redux";
import { getSingleProduct, } from "../store/singleProduct";
import { useDispatch, useSelector } from "react-redux";
import {deleteProduct} from "../store/productsReducer"
function SingleProduct(props){
  const  product  = useSelector(state => state.singleProduct);
  
  const {isAdmin } = useSelector(state => state.auth)
  const dispatch = useDispatch();
console.log('product', product)
  useEffect(() => {
    dispatch(getSingleProduct(props.match.params.id));
  }, []);
  const handleDelete = (e, itemId) =>{
    e.preventDefault();
    dispatch(deleteProduct(itemId))

  }
    return product ? (
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <img src={product.imageUrl} style={{ maxWidth: "400px" }} />
        <h1>{product.name}</h1>
        <h3>{product.description}</h3>
        <p>{product.location}</p>
        <p>Available: {String(product.isAvailable)}</p>
        {!isAdmin? null : (
                <>
                  <button>edit</button>
                   <button onClick={(e) => handleDelete(e, product.id)}>delete</button>
                </>
              )}
      </div>
    ) : (
      "loading"
    );
  }


export default SingleProduct