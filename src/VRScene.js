import "aframe";
import "aframe-particle-system-component";
import { Entity, Scene } from "aframe-react";
import React from "react";
import ReactDOM from "react-dom";

class VRScene extends React.Component {
  render() {
    return (
      <Scene inspector="https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js">
        <Entity
          geometry={{ primitive: "box" }}
          material={{ color: "red" }}
          position={{ x: 0, y: 0, z: -5 }}
        />
        <Entity particle-system={{ preset: "snow" }} />
        <Entity light={{ type: "point" }} />
        <Entity gltf-model={{ src: "virtualcity.gltf" }} />
        <Entity
          text={{ value: "Hello, WebVR!" }}
          material={{ color: "red" }}
          position={{ x: 0, y: 2, z: 2 }}
        />
      </Scene>
    );
  }
}

export default VRScene;
