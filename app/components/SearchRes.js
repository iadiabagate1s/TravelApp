import React,{useState, useEffect} from 'react'
import {useParams} from 'blitz'
import {useQuery} from 'blitz'
import { makeStyles } from '@material-ui/core/styles';
import SearchResli from '../queries/SearchRes'
import SearchData from './SearchData'




export default function SearchRes({formdata, update}) {
    
    const [data, setDate]= useState([])
    const [resarr] = useQuery(SearchResli,formdata, {staleTime: Infinity})
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    useEffect( () => {
        setDate(
            resarr
        )
        
        
        
    },[resarr,data])
    console.log('feat res',resarr)
    return (
        <div >
            
        {resarr.length === 0 ? <h4>No results </h4> : resarr.map(m => (

<SearchData update={update} listdata={m}/>

    ))}
            
            
            
            
        </div>
    )
}