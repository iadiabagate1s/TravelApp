
import React, {useState} from 'react'
import {Router } from 'blitz'
import {useRouter} from "blitz"
import SearchBar from '../components/SearchBar'
import FeatEvt from '../components/FeatEvt'
import {Suspense} from 'react'
import FeatCont from '../components/FeatCont'
import SearchRes from '../components/SearchRes'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { makeStyles } from '@material-ui/core/styles';
import SpinnerLoad from '../components/Spinner'
import {ErrorBoundary} from "react-error-boundary"
import {Head} from 'blitz'
import ErrorBoundary from "app/components/ErrorBoundary"

const useStyles = makeStyles((theme) => ({
 
 
    
    ftevt:{
  
    position: 'sticky',
    top:'0'
    
   
        

        
    },

}));


export default function search() {
    const classes = useStyles();
    const [selected, setSelected] = useState('')
    const router = useRouter()
    const formdata= {
        term : router.query.term,
        location : router.query.location
    }

    function update(data){
        setSelected(data)
    }
   
    return (
        <>
        <Head>
        <title>search</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
        <div>
        <ErrorBoundary fallback={(error) => <div>Error: {JSON.stringify(error)}</div>}>
              <Suspense fallback={<div><SpinnerLoad/></div>}>
            <FeatEvt location={formdata.location} selected={selected} update={update}/>
            
         </Suspense>
         </ErrorBoundary>
            <SearchBar/>
          

            <Container>
                <Row>
          
         <Col><FeatCont className={classes.ftevt} data={selected}/></Col>


         <ErrorBoundary fallback={(error) => <div>Error: {JSON.stringify(error)}</div>}>
         <Suspense fallback={<div><SpinnerLoad/></div>}>
         <Col><SearchRes formdata={formdata} update={update}/></Col>
         </Suspense>
         </ErrorBoundary>


         </Row>
            
         </Container>
            
        </div>
        
        </>
    )
}
