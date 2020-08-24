

import React from 'react'

import SearchForm from '../components/searchform'
import {Suspense} from 'react'

import ControlledCarouselhandle from '../components/sliderhome/ControlledCarousel'
import Categories from '../components/categories'
import NavSearch from '../components/NavSearch'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavTab from '../components/NavTab'
import SearchBar from '../components/SearchBar'
import SpinnerLoad from '../components/Spinner'
import {ErrorBoundary} from "react-error-boundary"
import {Head} from 'blitz'


export default function home() {
    return (

        <ErrorBoundary
     
      onReset={() => {
        // This ensures the Blitz useQuery hooks will automatically refetch
        // data any time you reset the error boundary
        queryCache.resetErrorBoundaries()
      }}
    >
        <div>
        <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
            <Container fluid >
         {/* <SearchForm/> */}
         {/* <Row><NavSearch/></Row> */}
         <SearchBar/>
         
        
         <Suspense fallback={<div><SpinnerLoad/></div>}>
         <ControlledCarouselhandle/>
         

         
         
            <NavTab/>
            </Suspense>
           
         {/* <Categories/> */}

         
       
         </Container>

        </div>
        </ErrorBoundary>
    )
}
