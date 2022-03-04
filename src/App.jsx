import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Sections/Intro/intro";
import Section from "./Components/Sections/section";
import Footer from "./Components/Footer/index";
import BoxText from "./Components/Boxes/TextBox/textBox";
import BoxImg from "./Components/Boxes/ImageBox/imgBox";
import BoxForm from "./Components/Boxes/FormBox/FormBox";
import BoxTimer from "./Components/Boxes/TimeBox/TimeBox"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import TextHistory from "./Components/Boxes/TextBox/Textos/TextHistory";
import TextDay from "./Components/Boxes/TextBox/Textos/TextDay";
import TextGift from "./Components/Boxes/TextBox/Textos/TextGift";

import flor from "./assets/flor_2-16.svg"

import img3low from "./assets/FotoFooter1.jpg"

const position = [-23.0235837,-43.5197324]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />

        <Section id="section1">
          <BoxText title="a nossa história">
            <TextHistory/>
          </BoxText>
        </Section>

        <div className="separator">
          <img
            src={flor}
            alt="img"
            className="separator-img"
          />
        </div>

        <Section id="section2">
          <div className="box">
            <BoxText title="sobre o nosso dia">
              <TextDay/>
            </BoxText>
          </div>
          <div className="box maps">
            <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  Estrada do Pontal, 1395 - casa 1 - Recreio dos Bandeirantes, RJ.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </Section>

        <Section>
          <BoxTimer />
        </Section>

        <div className="separator">
          <img
            src={flor}
            alt="img"
            className="separator-img"
          />
        </div>

        <Section id="section3">
          <div className="box">
            <BoxForm 
              title="confirme sua presença"
            />
          </div>
        </Section>

        <Section id="section4">
          <div className="box" >
            <BoxText title="lista de presentes">
              <TextGift/>
            </BoxText>
          </div>
          <div className="box">
            <BoxImg 
              lowImg={img3low}
              highImg={img3low}
            />
          </div>
        </Section>

        <Footer />
      </div>
    );
  }
}

export default App;
