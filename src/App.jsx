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

import img1low from "./assets/40.jpg"
import img2low from "./assets/38.jpg"
import img3low from "./assets/34.jpg"
import img1high from "./assets/36.jpg"
import img2high from "./assets/2high.jpg"
import img3high from "./assets/3high.jpg"

const position = [-23.0235837,-43.5197324]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />

          <Section id="section1">
            <div className="box">
              <BoxImg 
                propstyle="width: 100%;"
                lowImg={img1low}
                highImg={img1high}
              />
            </div>
            <div className="box">
              <BoxText 
                title="Nossa Historia" 
                subtitle="Nossa Historia"
              />
            </div>
          </Section>

          <Section id="section2">
            <div className="box">
              <BoxText 
                title="Nosso Dia" 
                subtitle="Nosso Dia"
              />
            </div>
            <div className="box">
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
            <div className="box" id="image-form">
              <BoxImg
                propstyle="width: 120%;" 
                lowImg={img2low}
                highImg={img2high}
              />
            </div>
            <div className="box" id="form-mobile">
              <BoxForm 
                title="RSVP"
              />
            </div>
          </Section>

          <Section id="section4">
            <div className="box" >
              <BoxText 
                title="Lista de Presente" 
                subtitle="Lista de Presente"
              />
            </div>
            <div className="box">
              <BoxImg
                propstyle="width: 120%;" 
                lowImg={img3low}
                highImg={img3high}
              />
            </div>
          </Section>

        
        <Footer />
      </div>
    );
  }
}

export default App;
