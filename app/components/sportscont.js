


import React, {useState, useEffect} from 'react'
import {Carousel} from 'react-bootstrap'
import {useQuery} from 'blitz'
import {useRouter} from "blitz"
import CatAtt from '../queries/cat'
import { makeStyles } from '@material-ui/core/styles';
import EvtAtt from './EvtAtt'

const useStyles = makeStyles((theme) => ({
 
 
    
    sportcont:{
  
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    textAlign : 'center'
   
        

        
    },

}));



export default function SportCont({category}) {
    const classes = useStyles();
    const router = useRouter()
    const SPORTS_ID = 'KZFzniwnSyZfZ7v7nE'

    if (router.isFallback) {
        return <div>Loading...</div>
      }
    
   
    const [data, setDate]= useState([])
    const [resarr] = useQuery(CatAtt,{id:category}, {staleTime: 2000 | Infinity})
    
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    useEffect( () => {
        setDate(
            resarr
        )
        
    },[resarr])
    console.log('sport',data)
    return (
        <div className={classes.sportcont}>
            
            <EvtAtt data={data}/>
            
        </div>
    )
}
