import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '40%',
    height: '60%',
};

class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 42.706894, lng: -73.920300}}
            />
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCb67jABu0h3XRLCZK4FmVCmzX9I3IKOBA'
  })(MapContainer);