
import React from 'react'
import {Suspense} from 'react'
import ControlledCarouselhandle from '../components/sliderhome/ControlledCarousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavTab from '../components/NavTab'
import SearchBar from '../components/SearchBar'
import SpinnerLoad from '../components/Spinner'


export default function home() {
    return (
      <>

        <div>
            <Container fluid >
       
         <SearchBar/>
         
        
         <Suspense fallback={<div><SpinnerLoad/></div>}>
         <ControlledCarouselhandle/>
         

         
         
            <NavTab/>
            </Suspense>
           
            

         
       
         </Container>

        </div>
        </>
    )
}