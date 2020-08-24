
import React,{useState, useEffect} from 'react'
import {useQuery} from 'blitz'
import nearBuis from '../queries/nearbuis'
import EvtAttBus from './EvtAttBus'

export default function NearBuis({lat, lon}) {
    const [data, setDate]= useState([])

    const [resarr] = useQuery(nearBuis,{lat :lat, lon : lon}, {staleTime:20000 | Infinity})

    console.log('buisenesses', resarr)
    useEffect( () => {
        setDate(
            resarr
        )
        
    },[resarr])
    console.log('busi',data)
    
    return (
        <div>
            <h1>Popular Places</h1>
            <EvtAttBus data={data} />


            
        </div>
    )
}
