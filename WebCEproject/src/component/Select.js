import { useState } from "react";
import "./Select.css";

import PicGeneralWaste from './PicGeneralWaste';
import PictureGeneralWaste from '../data/PictureGeneralWaste';

import PicRecycleWaste from './PicRecycleWaste';
import PictureRecycleWaste from '../data/PictureRecycleWaste';

import PicHazardousWaste from './PicHazardousWaste';
import PictureHazardousWaste from '../data/PictureHazardousWaste';
import Bar from "./Bar";

import { GeneralWasteElements } from "./Bar";
import Table from "./Table";
import Graph from "./Graph";

export const GeneralWasteElementsZoom = PictureGeneralWaste.map((GeneralWaste, index) => {
  return <PicGeneralWaste key={index} GeneralWaste={GeneralWaste} size="zoom"/>;
});

export const RecycleWasteElementsZoom = PictureRecycleWaste.map((RecycleWaste, index) => {
  return <PicRecycleWaste key={index} RecycleWaste={RecycleWaste} size="zoom"/>;
});

export const HazardousWasteElementsZoom = PictureHazardousWaste.map((HazardousWaste, index) => {
  return <PicHazardousWaste key={index} HazardousWaste={HazardousWaste} size="zoom"/>;
});

let TypeWasteElements = GeneralWasteElementsZoom;

let slideIndex = 0;

let borderPic;

function Select(props) {
  const { type } = props;
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  var slides = TypeWasteElements;
  
  var Show = slides[selectedIndex];
  
  
  if(type==="1"){
    TypeWasteElements = GeneralWasteElementsZoom;
    borderPic = "containerPicBlue";
  }
  else if(type==="2"){
    TypeWasteElements = RecycleWasteElementsZoom;
    borderPic = "containerPicYellow";
  }
  else{
    TypeWasteElements = HazardousWasteElementsZoom;
    borderPic = "containerPicRed";
  }

  /*-----------------------------------------------*/

  function plusSlides(num) {
    slideIndex = slideIndex + num;

    if (slideIndex > (slides.length-1)) {
      slideIndex = 0;
    }

    if (slideIndex < 0) {
      slideIndex = (slides.length-1);
    }

    setSelectedIndex(slideIndex);
    //document.getElementById("indexZoom").value=slideIndex;
  }
  
  return (
    <div>
      <div className="positionSB">
      <div className="container-select">
        <div className={borderPic}>
          {Show}
        </div>

        <div className="container-text-button">
          <p id="TypeWaste" className="Text">General Waste</p>
          <br />

          <button className="button-select1" onClick={() => plusSlides(-1)}> 
            <img src={require("../picture/left.png")} width="30" height="30" />
            <p>{selectedIndex}</p>
          </button>

          <button className="button-select2" onClick={() => plusSlides(1)}>
            <img src={require("../picture/right.png")} width="30" height="30" />
          </button>
        </div>
      </div>

    <p><Bar type={type} ind={slideIndex}/></p>

    </div>
    </div>
  );
 
}
export default Select;

