import React, { useState, useEffect } from "react";
import { fetchNFTs } from "../store/nft";
import { useDispatch, useSelector } from "react-redux";
// import { connect } from "react-redux";
 import { Link } from "react-router-dom";
// import { startSession } from "pg/lib/sasl";

function AllProducts(){

  const  NFTs  = useSelector(state => state.allProducts);
  const { isAdmin } = useSelector(state => state.auth);
  const [AllFTs, setAllFTs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNFTs());
   }, []);
    return NFTs ? (
      <div>
        {NFTs.map((item) => (
          <Link key={item.id} to={`/NFTs/${item.id}`}>
            <div>
              <h1>{item.name}</h1>
              <img
                src={item.imageUrl}
                style={{ width: "200px", height: "200px" }}
              />
              <h2>${item.price}</h2>
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