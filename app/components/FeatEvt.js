import React, {useState, useEffect} from 'react'
import {Carousel} from 'react-bootstrap'
import {useQuery} from 'blitz'
import {useRouter} from "blitz"
import EvtAtt from './EvtAtt'
import Featevt from '../queries/Featevt'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
 
 
    
    sportcont:{
  
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    textAlign : 'center'
   
        

        
    },

}));

export default function FilmCont({location,selected, update}) {
    
    const [data, setDate]= useState([])
    const [resarr] = useQuery(Featevt,{location:location}, {staleTime: 2000 |Infinity})
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    useEffect( () => {
        setDate(
            resarr
        )
        update(resarr)
        
    },[data, resarr])
    
    return (
        <div style={{display : 'none'}}>
            
            
        </div>
    )
}
