

import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useQuery} from 'blitz'
import {useRouter} from "blitz"
import EventsID from '../queries/eventsbyid'
import { makeStyles } from '@material-ui/core/styles';
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'



export default function EventDetail({evtLocation, id}) {
   
    const router = useRouter()
    const [key, setKey] = useState('Description');

    if (router.isFallback) {
        return <div>Loading...</div>
      }
    
   
    const [data, setDate]= useState([])
    const [resarr] = useQuery(EventsID,{id :id}, {staleTime:2000 | Infinity})
  
    let locodata = `${resarr.location.display_address[0]} ${resarr.location.display_address[1]}`
    const locolon = `${resarr.longitude}`
    const locolat = `${resarr.latitude}`
    let newlocodata = locodata.replace(/ /g, '+')
    
    let newstobj ={latitude : locolat, longitude: locolon, address: newlocodata}
    console.log('state obj',newstobj)
   
    useEffect( (rerssarr) => {
        setDate(
            resarr
        )  
        updatedata(newstobj)
    },[resarr])
    

    function updatedata(newstobj){
        evtLocation(newstobj)
    }

    
    console.log('single event',data)




    return (
        <div>
           <Card style={{width :'30vw', marginLeft : '10px'}}>
    <Card.Img style={{width : '30vw', height: '50vh'}} variant="top" src={resarr.image_url} alt='public/noimg.png' />
    <Card.Body>
      <Card.Text>
        <h3>{resarr.name}</h3>
        {(resarr.is_free)? (<h4>Free</h4>):(<h4>${resarr.cost}</h4>)}
        <a href={resarr.event_site_url}><h5>Link</h5></a>
        

      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="Description" title='Description'>
        {resarr.description}
      </Tab>
      <Tab eventKey="info" title="address">
        <p>{resarr.location.display_address[0]}, {resarr.location.display_address[1]} {resarr.location.display_address[2]}</p>
        
    
      </Tab>
      
    </Tabs>
 

  
            
        </div>
    )
}
