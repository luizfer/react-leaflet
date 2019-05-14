import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-icon.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-shadow.png',
});

class Maps extends React.Component {

  state = INITIAL_STATE;

  componentWillMount() {
    this._setLocation();
  }  

  _setLocation(lat = -22.9034, lng = -43.1917) {
    this.setState({...this.state, lat, lng});
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map boxZoom={false} animate style={MapContainerStyle} center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Endereço
          </Popup>
        </Marker>
      </Map>
    )
  }
}

const MapContainerStyle = {
  width: '100%',
  height: '800px'
};

const INITIAL_STATE = {
    lat: 0,
    lng: 0,
    zoom: 7
}

export default Maps;