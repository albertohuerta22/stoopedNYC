import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productsReducer';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';
import { Link } from 'react-router-dom';
function Map() {
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  const [activeMarker, setActiveMarker] = useState(null);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return products ?(
    <div>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 40.712776, lng: -74.005974 }}
      >
        {products.map((product) =>
          product.votes >= 5 ? (
            <div key={product.id}>
                <Marker
                  position={{ lat: (parseFloat(product.lat)), lng: (parseFloat(product.lng)) }}
                  icon={{
                    url: 'https://toppng.com/uploads/preview/free-fire-png-logo-11569068081ezy973wyyo.png',
                    scaledSize: { height: 30, width: 30 },
                  }}
                  
                  onClick={() => {setActiveMarker(product.id)}}
                  >{     product.id === activeMarker ? 
                    <InfoWindow {...product.name} >
                         <div>
                           <Link to={`/products/${product.id}`}>
                           <b>{product.name}</b>
                           <br />
                           <div class= "mapCenter">
                            <img src={product.imageUrl} height="50px" width="50px"/>
                           </div>
                           </Link>
                         </div>
                    </InfoWindow> : null}</Marker>
            </div>
          ) : (
            <div key={product.id}>
                <Marker
                  position={{  lat: (parseFloat(product.lat)), lng: (parseFloat(product.lng)) }}
                  onClick={() => {setActiveMarker(product.id)}}
                  >{     product.id === activeMarker ? 
                    <InfoWindow {...product.name} >
                         <div>
                           <Link to={`/products/${product.id}`}>
                           <b>{product.name}</b>
                           <br />
                           <div class= "mapCenter">
                            <img src={product.imageUrl} height="50px" width="50px"/>
                           </div>
                           </Link>
                         </div>
                    </InfoWindow> : null}</Marker>
            </div>
        )
        )}
      </GoogleMap>
    </div>
  ):(<>null</>)
}

// 5 votes should trigger flame icon instead of default marker

const WrappedMap = withScriptjs(withGoogleMap(Map));
// const API_KEY = process.env.REACT_APP_GOOGLE_KEY;
const mapView = () => {
  return (
    <div>
      <h1>Find stooped items near you!</h1>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=
            AIzaSyBzfXuSV3tMH - P0wHjs_29y9fIgbmvgJ8E
          `}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '70%', width: '50%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
      <Link to={'/products'}>
        <h1>Back To Search!</h1>
      </Link>
    </div>
  );
};

export default mapView;
