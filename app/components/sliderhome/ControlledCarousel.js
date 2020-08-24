import React, {useState, useEffect} from 'react'
import {Carousel} from 'react-bootstrap'
import {useQuery} from 'blitz'
import topEvent from '../../queries/homedata'
import Carouselcont from './carousel'


function ControlledCarouselhandle() {

    const [data, setDate]= useState([])
    const [resarr] = useQuery(topEvent, 'null')
    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };
    useEffect( () => {
        setDate(
            resarr
        )
        
    },[])

    return (
        <>
        
        
        <Carouselcont data={data}/>
        
        </>


        
    

    )
}
export default ControlledCarouselhandle