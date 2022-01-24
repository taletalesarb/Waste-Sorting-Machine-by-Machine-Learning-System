import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { waste: 'General', percentage: 29 ,chartColor: 'red'},
  { waste: 'Recycle', percentage: 26 ,chartColor: 'red'},
  { waste: 'Hazardous', percentage: 30 ,chartColor: 'red'},
  { waste: 'Others', percentage: 10 ,chartColor: 'red'},
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
    const colorPalette = {
      General: "#354657",
      Recycle: "#5597e2",
      Hazardous: "#28A96C",
      Others: "#d44401"
    }
    const getSeriesStyle = React.useCallback((series) => {
      // Based off my chart bars
      const colorPalette = {
        series1: "#354657",
        series2: "#5597e2",
        series3: "#28A96C",
        series4: "#d44401"
      };
  
      return {
        fill: colorPalette[series.label],
      };
    }, []);

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={4} />

          <BarSeries
            valueField="percentage"
            argumentField="waste"
            color={getSeriesStyle}
          />
          <Title text="Waste Sorted" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}