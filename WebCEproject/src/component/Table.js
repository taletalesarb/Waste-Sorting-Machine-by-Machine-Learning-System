//import { useState } from "react/cjs/react.production.min";
import { useState } from "react";
// import Picwaste from "./PicGeneralWaste";
import { GeneralWasteElements, RecycleWasteElements, HazardousWasteElements } from "./Bar";
import "./Table.css";
import Bar from "./Bar";
import Select from "./Select";
import Graph from "./Graph";

// let Showbar = <Bar type = "1" />

function Table() {

    let typeOfWaste = ["General Waste", "Recycle Waste", "Hazardous Waste"];

    const [selectedType, setSelectedType] = useState("1");

    function onTypeClick(name, num){
        document.getElementById("TypeWaste").innerHTML = name;
        setSelectedType(num);
    }
    
    //let Showbar = <Bar type = "1"/>
    let Showpic = <Select type = "1" />

    if(!!selectedType){
      //Showbar = <Bar type = {selectedType} />
      Showpic = <Select type = {selectedType} />
    }
    
  return (

    <div>
      <div className="positionX">
      
      <p className="item1"><Graph /></p>
      
      <p className="item2">
      <table id="Amount" >
        <tr>
          <th className="one"></th>
          <th className="one">Amount of waste (pieces)</th>
        </tr>
        <tr>
          <th className="two"><button className="typeWaste" onClick={() => onTypeClick('General Waste','1')}>{typeOfWaste[0]}</button></th>
          <th className="two">{GeneralWasteElements.length}</th>
        </tr>
        <tr>
          <th className="three"><button className="typeWaste" onClick={() => onTypeClick('Recycle Waste','2')}>{typeOfWaste[1]}</button></th>
          <th className="three">{RecycleWasteElements.length}</th>
        </tr>
        <tr>
          <th className="four"><button className="typeWaste" onClick={() => onTypeClick('Hazardous Waste','3')}>{typeOfWaste[2]}</button></th>
          <th className="four">{HazardousWasteElements.length}</th>
        </tr>
      </table>
      </p>

      <p className="break"></p>

      <p className="item3">{Showpic}</p>
      </div>

        {/* <p>{Showbar}</p> */}

    </div>
  );
  }
export default Table;

