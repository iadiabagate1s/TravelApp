import React,{useState} from 'react'
import {useParams} from 'blitz'
import {useQuery} from 'blitz'
import {useRouter} from "blitz"
import {Suspense} from 'react'
import MapsFrame from '../../components/mapsframe'
import EventDetail from '../../components/EventDetail'
import Iframe from 'react-iframe'
import { makeStyles } from '@material-ui/core/styles';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NearBuis from '../../components/NearBuis'
import SpinnerLoad from '../../components/Spinner'
import SearchBar from '../../components/SearchBar'
import {ErrorBoundary} from "react-error-boundary"
import {Head} from 'blitz'





const useStyles = makeStyles((theme) => ({
    evtcont:{
        
    },

}));


export default function AttracEvents() {
    const init = {latitude : '', longitude :'', address :''}
    const classes = useStyles();
    const params = useParams()
    const [location , setLocation] = useState(init)
    const [frominput, setFrominput]= useState('')
 
    
   

    const evtLocation = (obj)=>{
       

        setLocation(location => ({...location, ...obj}))
        
    }
 

    const enterFrom= (valfrom) => {
        
        let valloco = valfrom.replace(' ', '+')
      
        setFrominput(valloco)
    }

  



    return (
        <>
        <Head>
        <title>Event info</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <ErrorBoundary
   
      onReset={() => {
        // This ensures the Blitz useQuery hooks will automatically refetch
        // data any time you reset the error boundary
        queryCache.resetErrorBoundaries()
      }}
    >
        <div className={classes.evtcont}>
            <Container fluid>
                <SearchBar/>
            
           <Row>
            <Suspense fallback={<h1><SpinnerLoad/></h1>}>
          <Col md={4}><EventDetail evtLocation = {evtLocation} id={params.evtid}/></Col>
         </Suspense>
        
         
       <Col md={{ span: 6, offset: 1 }}> <MapsFrame frominput={frominput} enterFrom={enterFrom} desti={location} /></Col>
        </Row>
         
         
         <Suspense fallback={<h1><SpinnerLoad/></h1>}>
         <NearBuis lat ={location.latitude} lon = {location.longitude}/>
         </Suspense>
         
       
        
         
        </Container>


        
            
        </div>
        </ErrorBoundary>
        </>
    )
}