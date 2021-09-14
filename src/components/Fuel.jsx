import React, { useEffect, useState } from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts';
import Button from '@material-ui/core/Button';
import { When } from 'react-if';

function Fuel(props){
  const [showMonthly, setShowMonthly] = useState(false);
  const [showWeekly, setShowWeekly] = useState(false);

console.log('from the fuel', props.data);
  const fuelAvg = (j)=>{
    let sum = 0
    for(let i=0; i < props.data.length; i++){
      sum =+ props.data[i].monthlyFuel[j]
    }
    return sum/6
  }

  const fuelWeeklyAvg = (j)=>{
    let sum = 0
    for(let i=0; i < props.data.length; i++){
      sum =+ props.data[i].weeklyFuel[j]
    }
    return sum/4
  }
  function handleDisplayWeekly(){
    if(showWeekly === false){
      setShowWeekly(true)
      setShowMonthly(false)
    }
  }

  function handleDisplayMonthly(){
    if(showMonthly === false){
      setShowMonthly(true)
      setShowWeekly(false)
    }
    
  }


  const options1 = {
    animationEnabled: true,
    width: '700',
    theme : 'light2',
    colorSet: "colorSet3",
    title: {
      text: "Fuel Cost"
    },
    axisY: {
      title: "AVG/100km",
    },
    data: [{
      type: "splineArea",
      showInLegend: true,
      legendText: "Last 6 months",
      dataPoints: [
        { x: new Date(2020,12,1), y: fuelAvg(0) },
        { x: new Date(2021,1,1), y: fuelAvg(0) },
        { x: new Date(2021,2,1), y: fuelAvg(1) },
        { x: new Date(2021,3,1), y: fuelAvg(2) },
        { x: new Date(2021,4,1), y: fuelAvg(3) },
        { x: new Date(2021,5,1), y: fuelAvg(4) },
        { x: new Date(2021,6,1), y: fuelAvg(5) },
        { x: new Date(2021,7,1), y: fuelAvg(5) },
      ]
    }]
  }

  const options2 = {
    animationEnabled: true,
    width: '700',
    theme : 'light2',
    colorSet: "colorSet3",
    title: {
      text: "Fuel Cost"
    },
    axisY: {
      title: "AVG/100km",
    },
    data: [{
      type: "splineArea",
      showInLegend: true,
      legendText: "In Weeks",
      dataPoints: [
        { x: new Date(2021,8,7), y: fuelWeeklyAvg(0) },
        { x: new Date(2021,8,14), y: fuelWeeklyAvg(1) },
        { x: new Date(2021,8,21), y: fuelWeeklyAvg(2) },
        { x: new Date(2021,8,30), y: fuelWeeklyAvg(3) },
      ]
    }]
  }
    return(
        <>
        <div style={{width: '100%'}}>
        <div className='chartDiv'>
          <Button color="primary" onClick={()=> handleDisplayWeekly()}>Weekly</Button>
          <Button color="secondary" onClick={()=> handleDisplayMonthly()}>Monthly</Button>
</div>
          <When condition={showMonthly}>
          <div className='chartCont'>
			<CanvasJSChart className='canvas' options = {options1}/>
          </div>
          </When>
          <When condition={showWeekly}>
          <div className='chartCont'>
      <CanvasJSChart className ='canvas' options = {options2}/>
      </div>

      </When>

		</div>
        </>
    )
}

export default Fuel;