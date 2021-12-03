import React, { Component } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const position = [-23.0235837, -43.5197324]

function mapBox() {
    return (
      <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Pagum Jardins
          </Popup>
        </Marker>
      </MapContainer>
  );
}

export default mapBox;