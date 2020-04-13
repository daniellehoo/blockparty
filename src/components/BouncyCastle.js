import React from "react";
import { Entity } from "aframe-react";
// import Model from "../model/model.gltf";


const BouncyCastle = () => {
    return (
      <Entity
        gltf-model={{ src: "../model/model.gltf" }}
        position={{ x: 0, y: 1, z: -16 }}
        scale="1 1 1"
      ></Entity>
    );
}

export default BouncyCastle;