import React from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from 'react-google-maps';

function Map() {
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 40.712776, lng: -74.005974 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const mapView = () => {
  return (
    <div>
      <div style={{ width: '100vw', height: '100vh' }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBzfXuSV3tMH-P0wHjs_29y9fIgbmvgJ8E`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '70%', width: '50%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    </div>
  );
};

export default mapView;
