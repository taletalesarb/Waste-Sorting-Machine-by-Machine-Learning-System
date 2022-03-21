import { useState,useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Table from "./component/Table";

import PicGeneralWaste from "./component/PicGeneralWaste";
import PicRecycleWaste from "./component/PicRecycleWaste";
import PicHazardousWaste from "./component/PicHazardousWaste";

function App() {
  const [state, setState] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1:5000/getnumber")
          .then(response => response.json())
          .then(data => setState(data));
    })

  let numgen = parseInt(state.numg);
  let numre = parseInt(state.numr);
  let numha = parseInt(state.numh);

  const PictureGeneralWaste = [
      {
          picUrl: "http://127.0.0.1:5000/get-image/2022-03-21/general/1.jpg"
      }]
  for(let i=1;i<numgen;i++){
    PictureGeneralWaste.push({  
    picUrl: "http://127.0.0.1:5000/get-image/2022-03-21/general/1.jpg"
    })
    }
  /*-----------------------------------------------------------------------------*/

  const PictureHazardousWaste = [
      {
          picUrl: "http://127.0.0.1:5000/get-image/2022-03-21/hazardous/1.jpg"
      }]
  for(let i=1;i<numha;i++){
    PictureHazardousWaste.push({  
    picUrl: "http://127.0.0.1:5000/get-image/2022-03-21/hazardous/1.jpg"
    })
    }
  /*-----------------------------------------------------------------------------*/

  const PictureRecycleWaste = [
    {
        picUrl: "http://127.0.0.1:5000/get-image/2022-03-21/recycle/1.jpg"
    }]
  for(let i=1;i<numre;i++){
    PictureRecycleWaste.push({  
    picUrl: "http://127.0.0.1:5000/get-image/2022-03-21/recycle/1.jpg"
    })
    }
  /*-----------------------------------------------------------------------------*/

  const GeneralWasteElements = PictureGeneralWaste.map((GeneralWaste, index) => {
      return <PicGeneralWaste key={index} GeneralWaste={GeneralWaste} size="small" />;
  });
  const RecycleWasteElements = PictureRecycleWaste.map((RecycleWaste, index) => {
    return <PicRecycleWaste key={index} RecycleWaste={RecycleWaste} size="small"/>;
  });

  const HazardousWasteElements = PictureHazardousWaste.map((HazardousWaste, index) => {
    return <PicHazardousWaste key={index} HazardousWaste={HazardousWaste} size="small"/>;
  });
  /*-----------------------------------------------------------------------------*/

  const GeneralWasteElementsZoom = PictureGeneralWaste.map((GeneralWaste, index) => {
    return <PicGeneralWaste key={index} GeneralWaste={GeneralWaste} size="zoom"/>;
  });
  
  const RecycleWasteElementsZoom = PictureRecycleWaste.map((RecycleWaste, index) => {
    return <PicRecycleWaste key={index} RecycleWaste={RecycleWaste} size="zoom"/>;
  });
  
  const HazardousWasteElementsZoom = PictureHazardousWaste.map((HazardousWaste, index) => {
    return <PicHazardousWaste key={index} HazardousWaste={HazardousWaste} size="zoom"/>;
  });
  /*-----------------------------------------------------------------------------*/

  const GeneralWasteElementsHighlight = PictureGeneralWaste.map((GeneralWaste, index) => {
    return <PicGeneralWaste key={index} GeneralWaste={GeneralWaste} size="highlight"/>;
  });
  const RecycleWasteElementsHighlight = PictureRecycleWaste.map((RecycleWaste, index) => {
    return <PicRecycleWaste key={index} RecycleWaste={RecycleWaste} size="highlight"/>;
  });
  const HazardousWasteElementsHighlight = PictureHazardousWaste.map((HazardousWaste, index) => {
    return <PicHazardousWaste key={index} HazardousWaste={HazardousWaste} size="highlight"/>;
  });
  
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css2?family=Acme&display=swap"
        rel="stylesheet"
      ></link>
      
      <Header />
      <Table GeneralWasteElements = {GeneralWasteElements} RecycleWasteElements = {RecycleWasteElements} HazardousWasteElements = {HazardousWasteElements}
        GZ={GeneralWasteElementsZoom} RZ={RecycleWasteElementsZoom} HZ={HazardousWasteElementsZoom}
        GH={GeneralWasteElementsHighlight} RH={RecycleWasteElementsHighlight} HH={HazardousWasteElementsHighlight}
      />
      
    </div>
  );
}

export default App;

