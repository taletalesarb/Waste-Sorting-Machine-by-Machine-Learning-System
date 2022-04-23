import { useState,useEffect } from "react";
import * as React from 'react';
import "./App.css";
import Header from "./component/Header";
import Table from "./component/Table";

import PicGeneralWaste from "./component/PicGeneralWaste";
import PicRecycleWaste from "./component/PicRecycleWaste";
import PicHazardousWaste from "./component/PicHazardousWaste";
import Alert from "./component/Alert";

function App() {

  var today = new Date();
  let daydefault = today;
  let dateformat = today.toISOString().split('T')[0];

  let alertformat = today.toDateString().split(' ')[0] + " " + today.toDateString().split(' ')[2] + " " + today.toDateString().split(' ')[1]+ " " + today.toDateString().split(' ')[3];
  
  const [value, setValue] = React.useState(daydefault);
  const dateChange = (newValue) => {
    setValue(newValue);
    
    dateformat = newValue.toISOString().split('T')[0];
    // document.getElementById("popup").style.display = "flex";
    alertformat = newValue.toDateString().split(' ')[0] + " " + newValue.toDateString().split(' ')[2] + " " + newValue.toDateString().split(' ')[1]+ " " + newValue.toDateString().split(' ')[3];
    alert("You select date '" + alertformat+"'");
  };

  let popup = null;

  if(!!value&&(value!=daydefault)){
    popup = <Alert date = {value.toDateString().split(' ')[0] + " " + value.toDateString().split(' ')[2] + " " + value.toDateString().split(' ')[1]+ " " + value.toDateString().split(' ')[3] } />
  }


  if(!!value){
    dateformat = value.toISOString().split('T')[0];
  }

  /*-----------------------------------------------------------------------------*/

  const [state, setState] = useState([])
    useEffect(() => {
        fetch("http://161.246.6.249:443/getnumber/" + dateformat)
          .then(response => response.json())
          .then(data => setState(data));
    })

  let numgen = parseInt(state.numg);
  let numre = parseInt(state.numr);
  let numha = parseInt(state.numh);
  let numot = parseInt(state.numo);
  let sum = numgen+numre+numha+numot;

  const PictureGeneralWaste = []
  for(let i=1;i<=numgen;i++){
    PictureGeneralWaste.push({  
      picUrl: "http://161.246.6.249:443/get-image/"+ dateformat +"/general/"+i+".jpg"
    })
    }

  // PictureGeneralWaste.push({
  //   picUrl: "/PictureWaste/GeneralWaste/g1.jpg"
  // },
  // {
  //   picUrl: "/PictureWaste/GeneralWaste/g1.jpg"
  // }
  // )
  /*-----------------------------------------------------------------------------*/

  const PictureHazardousWaste = []
  for(let i=1;i<=numha;i++){
    PictureHazardousWaste.push({  
    picUrl: "http://161.246.6.249:443/get-image/"+ dateformat +"/hazardous/"+i+".jpg"
    })
    }
  /*-----------------------------------------------------------------------------*/

  const PictureRecycleWaste = []
  for(let i=1;i<=numre;i++){
    PictureRecycleWaste.push({  
    picUrl: "http://161.246.6.249:443/get-image/"+ dateformat +"/recycle/"+i+".jpg"
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <link
        href="https://fonts.googleapis.com/css2?family=Acme&display=swap"
        rel="stylesheet"
      ></link>
      
      <Header value={value} newDate={dateChange}/>

      {/* {popup} */}

      <Table GeneralWasteElements = {GeneralWasteElements} RecycleWasteElements = {RecycleWasteElements} HazardousWasteElements = {HazardousWasteElements}
        GZ={GeneralWasteElementsZoom} RZ={RecycleWasteElementsZoom} HZ={HazardousWasteElementsZoom}
        GH={GeneralWasteElementsHighlight} RH={RecycleWasteElementsHighlight} HH={HazardousWasteElementsHighlight}
        numot = {numot} sum={sum}
      />
      
    </div>
  );
}

export default App;