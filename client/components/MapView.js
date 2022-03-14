import React from 'react';

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from 'react-google-maps';
import { Link } from 'react-router-dom';

const products = require('../../script/data');

function Map() {
  return (
    <div>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 40.712776, lng: -74.005974 }}
      >
        {products.map((product) =>
          product.votes >= 5 ? (
            <div key={product.id}>
              <Marker
                position={{ lat: product.lat, lng: product.lng }}
                icon={{
                  url: 'https://toppng.com/uploads/preview/free-fire-png-logo-11569068081ezy973wyyo.png',
                  scaledSize: { height: 50, width: 50 },
                }}
              ></Marker>
            </div>
          ) : (
            <div key={product.id}>
              <Marker
                position={{ lat: product.lat, lng: product.lng }}
              ></Marker>
            </div>
          )
        )}
      </GoogleMap>
    </div>
  );
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
