import "aframe";
import "aframe-particle-system-component";
import { Entity, Scene } from "aframe-react";
import React from "react";
import ReactDOM from "react-dom";

class VRScene extends React.Component {
  render() {
    return (
      <Scene inspector="https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js">
        <a-assets>
          <img src="https://img.gs/bbdkhfbzkk/stretch/https://i.imgur.com/25P1geh.png" id="grid" crossorigin="anonymous"/>
          <img
            id="skyTexture"
            src="https://img.gs/bbdkhfbzkk/2048x2048,stretch/http://i.imgur.com/WqlqEkq.jpg"
          />
        </a-assets>
        <Entity
          primitive="a-sky"
          height="2048"
          radius="5000"
          src="#skyTexture"
          theta-length="180"
          width="2048"
          rotation="0 -90 0"
        />
        <Entity 
          primitive="a-plane"
          width="10000"
          height="10000"
          rotation="-90 0 0"
          color="#f600ff"
          transparent="true"
          material="src: #grid; repeat: 10000 10000; metalness: 0.6; roughness:0.6; transparent: true;"
        />
        <Entity
          particle-system={{ preset: "stars" }}
          position={{ x: 0, y: 1, z: -16 }}
        />
        <Entity 
          primitive="a-light"
          type="ambient"
          intensity="1.5"
          color="#ffaaff"
          position="0, 2, 5"
        />
        <Entity
          text={{ value: "Block Party!", align: "center" }}
          position={{ x: 0, y: 2, z: -1 }}
          material={{ color: "red" }}
        />
      </Scene>
    );
  }
}

export default VRScene;