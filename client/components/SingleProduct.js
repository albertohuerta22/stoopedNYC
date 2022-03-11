import React, { useState, useEffect } from "react";
//import { connect } from "react-redux";
import { getSingleProduct, } from "../store/singleProduct";
import { useDispatch, useSelector } from "react-redux";

function SingleProduct(props){
  const  Product  = useSelector(state => state.singleProduct);
  
  const {isAdmin } = useSelector(state => state.auth)
  //const [AllFTs, setAllFTs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(props.match.params.id));
  }, []);
    return Product ? (
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
        <img src={Product.imageUrl} style={{ maxWidth: "400px" }} />
        <h1>{Product.name}</h1>
        <h3>{Product.description}</h3>
        <p>{Product.location}</p>
        <p>Available: {String(Product.isAvailable)}</p>
        {!isAdmin? null : (
                <>
                  <button>edit</button>
                  <button>delete</button>
                </>
              )}
      </div>
    ) : (
      "loading"
    );
  }


export default SingleProduct