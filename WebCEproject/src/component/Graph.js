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
  { year: 'General', population: 2.525 },
  { year: 'Recycle', population: 3.018 },
  { year: 'Hazardous', population: 3.282 },
  { year: 'Others', population: 1.440 },
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

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={4} />

          <BarSeries
            valueField="population"
            argumentField="year"
          />
          <Title text="Waste Sorted" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}