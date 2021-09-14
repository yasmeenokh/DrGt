import React, { useEffect, useState } from 'react';
// import ReactDom from 'react-dom'; 

import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 350,
    margin : '2% auto'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));


function Condition (props){
    const classes = useStyles();
    let good = [];
    let satisfactory = [];
    let critical = [];

    for(let i =0; i < props.data.length ; i++){
        if(props.data[i].condition === 'Good'){
            good.push(props.data[i])
        }
        else if(props.data[i].condition === 'Satisfactory'){
            satisfactory.push(props.data[i])
        } else {
            critical.push(props.data[i])
        }
    }

    let goodPercentage = good.length/props.data.length * 100;
    let satisfactoryPercentage = satisfactory.length/props.data.length * 100;
    let criticalPercentage = critical.length/props.data.length * 100;

    return(
        <>
        <div className='outerDiv'>
        <Typography variant="h5" color="textPrimary" component="p">
        Vehicles Condition
        </Typography>
        <div className="cardsDiv">        
 <Card className={classes.root}>
      <CardHeader
        title="Good"
        subheader={`${goodPercentage.toFixed(2)}%`}
      />
          <CircularProgress
          size={`30%`}
          value={goodPercentage}
          thickness={3}
          variant="static"
          color="secondary"
        />
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {good.length} <br/>
        Vehicle 
        </Typography>
      </CardContent>
      
    </Card>

    <Card className={classes.root}>
      <CardHeader
        title="Satisfactory"
        subheader={`${satisfactoryPercentage.toFixed(2)}%`}
      />
         <CircularProgress
      size={`30%`}
      value={satisfactoryPercentage}
      thickness={3}
      variant="static"
      color="primary"
    />
     <Divider variant="middle" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {satisfactory.length} <br/>
        Vehicle
        </Typography>
      </CardContent>
      
    </Card>

    <Card className={classes.root}>
      <CardHeader
        title="Critical"
        subheader={`${criticalPercentage.toFixed(2)}%`}
      />
         <CircularProgress
      size={`30%`}
      value={criticalPercentage}
      thickness={3}
      variant="static"
      color="default"
    />
    <Divider variant="middle" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {critical.length} <br/>
        Vehicle
        </Typography>
      </CardContent>
      
    </Card>

    </div>
    </div>
        </>
    )
}

export default Condition;