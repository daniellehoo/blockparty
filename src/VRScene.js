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
          <img
            id="groundTexture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
          />
          <img
            id="skyTexture"
            src="https://cdn.aframe.io/a-painter/images/sky.jpg"
          />
        </a-assets>
        <Entity
          primitive="a-sky"
          height="2048"
          radius="30"
          src="#skyTexture"
          theta-length="90"
          width="2048"
        />

        {/* <Entity
          geometry={{ primitive: "box" }}
          material={{ color: "red" }}
          position={{ x: 0, y: 0, z: -5 }}
        /> */}
        <Entity particle-system={{ preset: "stars" }} />
        <Entity light={{ type: "point" }} />
        <Entity gltf-model={{ src: "virtualcity.gltf" }} />
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