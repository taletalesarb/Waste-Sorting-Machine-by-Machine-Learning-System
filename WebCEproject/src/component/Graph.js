import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import "./Graph.css";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { waste: 'General', percentage: 29 ,chartColor: '#354657'},
  { waste: 'Recycle', percentage: 26 ,chartColor: '#354657'},
  { waste: 'Hazardous', percentage: 30 ,chartColor: '#354657'},
  { waste: 'Others', percentage: 10 ,chartColor: '#354657'},
];

export default class Graph extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
    const colorPalette = [
      "#354657",
      "#5597e2",
      "#28A96C",
      "#d44401"
    ]

    return (
      <Paper className="PaperSize">
      
        <Chart
          data={chartData}
          colorType="literal"
          height={300}
          width={600}
          
        >
          <ArgumentAxis />
          <ValueAxis max={4} />
          
          <BarSeries
            valueField="percentage"
            argumentField="waste"
            color= {this.state.data.chartColor}
            
          />
          <Title text="Waste Sorted" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}