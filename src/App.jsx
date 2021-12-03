import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Sections/Intro/intro";
import Section from "./Components/Sections/section";
import Footer from "./Components/Footer/index";
import BoxText from "./Components/Boxes/TextBox/textBox";
import BoxImg from "./Components/Boxes/ImageBox/imgBox";
import BoxForm from "./Components/Boxes/FormBox/FormBox";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import img1 from "./assets/40.jpg"
import img2 from "./assets/38.jpg"
import img3 from "./assets/39.jpg"

const position = [-23.0235837,-43.5197324]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />

          <Section id="section1">
            <div className="box1">
              <BoxImg 
                propstyle="width: 100%;"
                imagem={img1}
              />
            </div>
            <div className="box2">
              <BoxText 
                title="Nossa Historia" 
                subtitle="Nossa Historia"
              />
            </div>
          </Section>

          <Section id="section2">
            <div className="box1">
              <BoxText 
                title="Nosso Dia" 
                subtitle="Nosso Dia"
              />
            </div>
            <div className="box2">
              <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
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
            </div>
          </Section>

          <Section id="section3">
            <div className="box1">
              <BoxImg
                propstyle="width: 120%;" 
                imagem={img2}
              />
            </div>
            <div className="box2">
              <BoxForm 
                title="RSVP" 
                subtitle="RSVP"
              />
            </div>
          </Section>

          <Section id="section4">
            <div className="box1">
              <BoxText 
                title="Lista de Presente" 
                subtitle="Lista de Presente"
              />
            </div>
            <div className="box2">
              <BoxImg
                propstyle="width: 120%;" 
                imagem={img3}
              />
            </div>
          </Section>

        
        <Footer />
      </div>
    );
  }
}

export default App;
