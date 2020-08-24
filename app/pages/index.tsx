
import React from 'react'
import {Suspense} from 'react'
import ControlledCarouselhandle from '../components/sliderhome/ControlledCarousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavTab from '../components/NavTab'
import SearchBar from '../components/SearchBar'
import SpinnerLoad from '../components/Spinner'
import {ErrorBoundary} from "react-error-boundary"
import ErrorBoundary from "app/components/ErrorBoundary"


export default function home() {
    return (
      <>

        <div>
            <Container fluid >
       
         <SearchBar/>
         
         <ErrorBoundary fallback={(error) => <div>Error: {JSON.stringify(error)}</div>}>
         <Suspense fallback={<div><SpinnerLoad/></div>}>
         <ControlledCarouselhandle/>
         

         
         
            <NavTab/>
            </Suspense>
           
            </ErrorBoundary>

         
       
         </Container>

        </div>
        </>
    )
}