import { useState } from "react";
import "./Select.css";

import PicGeneralWaste from './PicGeneralWaste';
import PictureGeneralWaste from '../data/PictureGeneralWaste';

import PicRecycleWaste from './PicRecycleWaste';
import PictureRecycleWaste from '../data/PictureRecycleWaste';

import PicHazardousWaste from './PicHazardousWaste';
import PictureHazardousWaste from '../data/PictureHazardousWaste';

export const GeneralWasteElements = PictureGeneralWaste.map((GeneralWaste, index) => {
  return <PicGeneralWaste key={index} GeneralWaste={GeneralWaste} size="zoom"/>;
});

export const RecycleWasteElements = PictureRecycleWaste.map((RecycleWaste, index) => {
  return <PicRecycleWaste key={index} RecycleWaste={RecycleWaste} size="zoom"/>;
});

export const HazardousWasteElements = PictureHazardousWaste.map((HazardousWaste, index) => {
  return <PicHazardousWaste key={index} HazardousWaste={HazardousWaste} size="zoom"/>;
});


let TypeWasteElements = GeneralWasteElements;

let slideIndex = 0;

let borderPic;


function Select(props) {
  const { type } = props;

  const [selectedIndex, setSelectedIndex] = useState(0);

  var slides = TypeWasteElements;
  
  var Show = slides[selectedIndex];
  
  if(type==="1"){
    TypeWasteElements = GeneralWasteElements;
    borderPic = "containerPicBlue";
  }
  else if(type==="2"){
    TypeWasteElements = RecycleWasteElements;
    borderPic = "containerPicYellow";
  }
  else{
    TypeWasteElements = HazardousWasteElements;
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
  }

 
  return (
    <div>
      <div className="container-select">
        <div className={borderPic}>
          {Show}
        </div>

        <div className="container-text-button">
          <p id="TypeWaste">General Waste</p>
          <br />

          <button className="button-select1" onClick={() => plusSlides(-1)}>
            <img src={require("../picture/left.png")} width="30" height="30" />
            {/* <p>{slideIndex}</p> */}
          </button>

          <button className="button-select2" onClick={() => plusSlides(1)}>
            <img src={require("../picture/right.png")} width="30" height="30" />
          </button>
        </div>
      </div>
    </div>
  );
 
}
export default Select;
