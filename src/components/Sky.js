import React from 'react';
import { Entity } from "aframe-react";

const Sky = () => {
	return (
        <Entity
          primitive="a-sky"
          src="#sky"
          height="2048"
          radius="5000"
          theta-length="180"
          width="2048"
          rotation="0 -90 0"
        />
	);
}

export default Sky;