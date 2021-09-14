import React, { useEffect, useState } from 'react';
import superagent from 'superagent';
import Status from './Status';
import Condition from './Condition';
import Fuel from './Fuel';
import './styles.css'


function Parent(props){
    const [data, setData] = useState([]);
    const fetchData = async()=>{
        try{
            const carsData = await superagent.get('https://yasmeen-gt.herokuapp.com/api/v1/cars');
            console.log('THE CARS DATA',carsData.body)
            return  await setData(carsData.body);
        } catch (error){
            console.log('COULD NOT GET DATA', error.message);
        }
    }

useEffect(async()=>{
    await fetchData()
},[])
    return(
        <>
        <Status  data={data}/>
        <Condition data={data}/>
        <Fuel data = {data}/>
        </>
    )
}

export default Parent;