
import './Date.css'
import * as React from 'react';

import TextField from '@mui/material/TextField';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

import { styled } from '@mui/material/styles';


export default function MaterialUIPickers(props) {
  const { newDate , value} = props;

  var today = new Date();
  var min = (new Date()).setDate(today.getDate() - 7);

  return (
    <div>
    <div id = "selectDate" >
    <LocalizationProvider dateAdapter={AdapterDateFns} >
        <DesktopDatePicker
        
          label="Date"
          inputFormat="dd/MM/yyyy"
          value={value}
          onChange={newDate}
          maxDate= {today}
          minDate = {min}
          renderInput={(params) => <TextField {...params} id="date"/>}
        />
    </LocalizationProvider>
    
    </div>
    </div>
  );
}