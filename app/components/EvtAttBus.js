import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'blitz'



const useStyles = makeStyles((theme) => ({
 
 
    
    imagecontainer :{
       
        verticalAlign: 'middle',
        display: 'inline-block',
        width :'90%',
        whiteSpace : 'nowrap',
        marginTop : '7px',
        border :'1px solid black',
        
       
        overflowX: 'auto',
        overflowY: 'hidden',
      },
      itemscl :{
        height: '55vh',
        width: '30vw',
        
        background: 'white',
        margin: '3px',
        display: 'inline-block',
        lineHeight: '14px',
        color: 'blue',
       
        
        
      }
      
    
}));


export default function EvtAttBus({data}) {
    const classes = useStyles();


    return (
        <>
        
         <div className={classes.imagecontainer}>
         
        
                 {data.map(spevt => (
                    

<div className={classes.itemscl}>
  <Card key={spevt.id} style={{height :'55vh',width:'27vw', margin :'5px',boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)' }} >
    <Card.Img style={{height : '30vh'}}  variant="top" src={!spevt.image_url ? '/noimg.png': spevt.image_url}/>
    <Card.Body   >
      
      <Card.Title ><p>{spevt.name}</p></Card.Title>
              {spevt.categories.map(cat => (<small> {cat.title} </small>))}
      
      <Card.Text  >
      <h6 >{(spevt.distance / 1600).toFixed(1)} miles</h6>
      </Card.Text>
      
      <b className=""><a href={spevt.url}>Link </a></b>
    </Card.Body>
    
  </Card>
  </div>


  
          ))}


  






          </div> 
            
        
        </>
    )
}
