import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom'; 
// import './status.css'

import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(3, 2),
    
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));


function Status(props){
    const classes = useStyles();
        let activeCounter = [];
        let inactiveCounter = [];
        let inShop = [];
            for(let i=0; i < props.data.length; i++){
                if(props.data[i].status === "Active"){
                    activeCounter.push(props.data[i])
                }
                else if(props.data[i].status === "Inactive"){
                    inactiveCounter.push(props.data[i])
                }
                else {
                    inShop.push(props.data[i])
                }
            }
    return(
        <>

<div className={classes.root} style={{border: 'solid 1px rgb(226, 219, 219)', margin: '2% auto',
borderRadius : '5%',
}}>
      <div className={classes.section1} >
             <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" 
            style={{fontSize :'2em'}}
            >
            Vehicle Status
            </Typography>
          </Grid>
          <Grid item>
          <Button color="primary">
              Details
          </Button>
          </Grid>
        </Grid>
        <div className='hoverEff'>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4"
            style={{fontSize :'1.5em'}}
            >
              Active
            </Typography>
          </Grid>
          <Grid item>
          <Chip className={classes.chip} color="primary" label={activeCounter.length} />
          </Grid>
        </Grid>
      </div>
      <Divider variant="middle" />
      </div>
      <div className='hoverEff'>
      <div className={classes.section1} >
      <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4"
            style={{fontSize :'1.5em'}}
            >
              Inactive
            </Typography>
          </Grid>
          <Grid item>
          <Chip className={classes.chip} color="secondary" label={inactiveCounter.length} />
          </Grid>
        </Grid>
        <Divider variant="middle" />
        </div>
        </div>
        <div className='hoverEff'>
        <div className={classes.section1} >
      <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" 
            style={{fontSize :'1.5em'}}
            >
              In Shop
            </Typography>
          </Grid>
          <Grid item>
          <Chip className={classes.chip} color="default" label={inShop.length} />
          </Grid>
        </Grid>
        </div>
        </div>
    </div>

      
        </>
    )
}

export default Status;