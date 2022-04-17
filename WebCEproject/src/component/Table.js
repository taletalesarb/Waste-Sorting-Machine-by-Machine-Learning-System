import { useState } from "react";

import "./Table.css";
import Select from "./Select";
import Graph from "./Graph";

// let Showbar = <Bar type = "1" />

function Table(props) {

  const { GeneralWasteElements,RecycleWasteElements,HazardousWasteElements, GZ , RZ , HZ , GH , RH , HH, numot, sum} = props;
  

    let typeOfWaste = ["General Waste", "Recycle Waste", "Hazardous Waste"];

    const [selectedType, setSelectedType] = useState("1");

    function onTypeClick(name, num){
        document.getElementById("TypeWaste").innerHTML = name;
        setSelectedType(num);
    }
    
    //let Showbar = <Bar type = "1"/>
    let Showpic = <Select type = "1" GeneralWasteElements = {GeneralWasteElements} RecycleWasteElements = {RecycleWasteElements} HazardousWasteElements = {HazardousWasteElements}
      GZ={GZ} RZ={RZ} HZ={HZ} GH={GH} RH={RH} HH={HH}
    />

    if(!!selectedType){
      //Showbar = <Bar type = {selectedType} />
      Showpic = <Select type = {selectedType} GeneralWasteElements = {GeneralWasteElements} RecycleWasteElements = {RecycleWasteElements} HazardousWasteElements = {HazardousWasteElements}
      GZ={GZ} RZ={RZ} HZ={HZ} GH={GH} RH={RH} HH={HH}
    />
    }
    
  return (

    <div>
      <div className="positionX">
      
      <p className="item1">
        <Graph GeneralWasteElements = {GeneralWasteElements} RecycleWasteElements = {RecycleWasteElements} HazardousWasteElements = {HazardousWasteElements} 
        numot={numot} sum={sum}/></p>

      <p className="item2">
      
      <table id="Amount" >
        <tr>
          <th className="one">Type of waste</th>
          <th className="one">Amount of waste (pieces)</th>
        </tr>
        <tr>
          <th className="two" ><button className="typeWaste" id="tgg" onClick={() => onTypeClick('General Waste','1')}>{typeOfWaste[0]}</button></th>
          <th className="two">{GeneralWasteElements.length}</th>
        </tr>
        <tr>
          <th className="three"><button className="typeWaste" id="trr" onClick={() => onTypeClick('Recycle Waste','2')}>{typeOfWaste[1]}</button></th>
          <th className="three">{RecycleWasteElements.length}</th>
        </tr>
        <tr>
          <th className="four"><button className="typeWaste" id="thh" onClick={() => onTypeClick('Hazardous Waste','3')}>{typeOfWaste[2]}</button></th>
          <th className="four">{HazardousWasteElements.length}</th>
        </tr>
      </table>
      <p className="hint"><img src = {require('../picture/tap.png')} width="15" height="15" /> Click type of waste to show picture.</p>
      </p>

      <p className="break"></p>

      <p className="item3">{Showpic}</p>
      </div>
    </div>
  );
  }
export default Table;