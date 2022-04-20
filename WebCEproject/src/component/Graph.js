import * as React from "react";
import Paper from "@material-ui/core/Paper";
import "./Graph.css";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { EventTracker, HoverState } from '@devexpress/dx-react-chart';

function Graph(props) {
  const { GeneralWasteElements,RecycleWasteElements,HazardousWasteElements,numot,sum} = props;
  let data;  
  let percentG;
  let percentR;
  let percentH;
  let percentO;

  if (sum!==0){
    percentG = Math.round((GeneralWasteElements.length/sum)*100);
    percentR = Math.round((RecycleWasteElements.length/sum)*100);
    percentH = Math.round((HazardousWasteElements.length/sum)*100);
    percentO = Math.round((numot/sum)*100);
  }
  else{
    percentG = 0;
    percentR = 0;
    percentH = 0;
    percentO = 0;
  }

  // data = [
  //   { waste: "General", percentage1: percentG},
  //   { waste: "Recycle", percentage2: percentR},
  //   { waste: "Hazardous", percentage3: percentH},
  //   { waste: "Others", percentage4: percentO},
  // ];

  data = [
    { waste: "General", percentage1: 10},
    { waste: "Recycle", percentage2: 20},
    { waste: "Hazardous", percentage3: 30},
    { waste: "Others", percentage4: 40},
  ];

  return (
    <div>
      
      <Paper className="PaperSize">
        <Chart data={data} colorType="literal" className="chartSize" /*height={300} width={600}*/ >
          
          <ArgumentAxis />
          <ValueAxis max={4} />

          <BarSeries
            valueField="percentage1"
            argumentField="waste"
            color="#0070C0"
            
          />
          <BarSeries
           valueField="percentage2"
           argumentField="waste"
           color="#F3DC5F"
          />
          <BarSeries
           valueField="percentage3"
           argumentField="waste"
           color="#DD2D4D"
          />
          <BarSeries
           valueField="percentage4"
           argumentField="waste"
           color="#01b29a"
          />


          {/* <Title text="Waste Sorted"/> */}
          <div className="deco">Waste Sorted </div>
          <div className="amount">Amount (%)</div>
          {/* <Animation /> */}
          <EventTracker />
          <HoverState />
          <Tooltip />
          
        </Chart>
       
      </Paper>
    </div>
  );
}
export default Graph;