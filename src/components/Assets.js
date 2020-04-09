import React from "react";

const Assets = () => {
	return (
        <a-assets>
		    <img 
	          	id="grid"
	          	alt="" 
	          	src="https://img.gs/bbdkhfbzkk/stretch/https://i.imgur.com/25P1geh.png" 
	          	crossorigin="anonymous"
	      	/>
	        <img
	            id="sky"
	            alt=""
	            src="https://img.gs/bbdkhfbzkk/2048x2048,stretch/http://i.imgur.com/WqlqEkq.jpg"
	        />
			<img id="pink" src="https://img.gs/bbdkhfbzkk/stretch/http://i.imgur.com/1hyyIUi.jpg" crossorigin="anonymous" />
			<a-asset-item id="helvetikerBold" src="https://rawgit.com/mrdoob/three.js/dev/examples/fonts/helvetiker_bold.typeface.json"></a-asset-item>        
		</a-assets>
	);
}

export default Assets;
