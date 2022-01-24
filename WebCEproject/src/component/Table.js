import { useState } from "react/cjs/react.production.min";
import Picwaste from "./Picwaste";
import Select from "./Select";
import "./Table.css";
function Table() {

    let type = ["General Waste", "Recycle Waste", "Hazardous Waste"];

    function onTypeClick(name){
        document.getElementById("TypeWaste").innerHTML = name;
    }

  return (

    <div>
      <table id="Amount">
        <tr>
          <th className="one"></th>
          <th className="one">Amount of waste (pieces)</th>
        </tr>
        <tr>
          <th className="two"><button className="typeWaste" onClick={() => onTypeClick('General Waste')}>{type[0]}</button></th>
          <th className="two"></th>
        </tr>
        <tr>
          <th className="three"><button className="typeWaste" onClick={() => onTypeClick('Recycle Waste')}>{type[1]}</button></th>
          <th className="three"></th>
        </tr>
        <tr>
          <th className="four"><button className="typeWaste" onClick={() => onTypeClick('Hazardous Waste')}>{type[2]}</button></th>
          <th className="four"></th>
        </tr>
      </table>
        
        {/*-----------------*/}
        
      <div className="container-select">
        <div className="container-pic"></div>

        <div className="container-text-button">

          <p id="TypeWaste">General Waste</p>
          <br/>

          
          <button className="button-select1">
            <img src={require("../picture/left.png")} width="30" height="30" />
          </button>
          
          <button className="button-select2">
            <img src={require("../picture/right.png")} width="30" height="30" />
          </button>
          
        </div>
      </div>
    
    </div>
    
  );
}
export default Table;
