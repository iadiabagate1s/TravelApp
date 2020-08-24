import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'blitz'
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
 
 
    
    imagecontainer :{
       
     display : 'flex',
     flexWrap: 'wrap'
        
        
       
       
      },
      itemscl :{
        height: '200px',
        width: '200px',
        fontSize: '25px',
        background: 'white',
        margin: '3px',
        display: 'inline-block',
        lineHeight: '50px',
        color: 'green'
      }
      
    
}));

export default function DataHandle({data}) {
    const classes = useStyles();
    return (
        <>
         <div className={classes.imagecontainer}>
        
                 {data.map(spevt => (
                    
 <Link href='/events/[evtid]' as={`/events/${spevt.id}`}>
  <a>


<Card key= {spevt.id} style={{ width: '16.5rem' ,height: '22rem', margin: '5px', boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)' }}>
  
  <Card.Body>
                 <Card.Title>{spevt.name}</Card.Title>
    <Card.Text>
     
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{spevt._embedded.venues[0].name}</ListGroupItem>
    <ListGroupItem>{spevt._embedded.venues[0].address.line1}, 
      {spevt._embedded.venues[0].city.name} {spevt._embedded.venues[0].country.name}
     {spevt._embedded.venues[0].postalCode}</ListGroupItem>
    <ListGroupItem>{moment(spevt.dates.start.localDate).format('MMMM Do YYYY, h:mm:ss a')}</ListGroupItem>
  </ListGroup>
  
</Card>
</a>
</Link> 

  
          ))}
          </div> 
            
        
        </>
    )
}