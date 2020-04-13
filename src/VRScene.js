import "aframe";
import "aframe-particle-system-component";
import "aframe-text-geometry-component";
import { Entity, Scene } from "aframe-react";
import React from "react";
import ReactDOM from "react-dom";

// Components
import Assets from './components/Assets';
import Sky from './components/Sky';
import BouncyCastle from './components/BouncyCastle';

class VRScene extends React.Component {
  render() {
    return (
      <Scene inspector="https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js">
        <Assets />
        <Sky />
        <BouncyCastle/>
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
          rotation="0 0 5"
          position="-9 3 -10"
          text-geometry="value: BLOCKPARTY; font: #helvetikerBold; bevelEnabled: true; bevelSize: 0.05; bevelThickness: 0.05; curveSegments: 12; size: 2; height: 0;"
          material="color:lavenderblush; metalness:1; roughness: 0; sphericalEnvMap: #pink;"
        />
      </Scene>
    );
  }
}

export default VRScene;