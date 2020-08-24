
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
       
              <Suspense fallback={<div><SpinnerLoad/></div>}>
            <FeatEvt location={formdata.location} selected={selected} update={update}/>
            
         </Suspense>
 
            <SearchBar/>
          

            <Container>
                <Row>
          
         <Col><FeatCont className={classes.ftevt} data={selected}/></Col>


         
         <Suspense fallback={<div><SpinnerLoad/></div>}>
         <Col><SearchRes formdata={formdata} update={update}/></Col>
         </Suspense>
      


         </Row>
            
         </Container>
            
        </div>
        
        </>
    )
}
