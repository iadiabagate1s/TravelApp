
import React, {useState, useEffect} from 'react'
import {Carousel} from 'react-bootstrap'
import {useQuery} from 'blitz'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'blitz'
import moment from 'moment'




const useStyles = makeStyles((theme) => ({
 
 
    
    carouseledit:{
        width : 'auto',
        height : '50vh',
        maxHeight : '52vh',

        
    }
}));

function Carouselcont({data}) {
  const classes = useStyles();
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (

      <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>

          
          {data.map(att => (
            
                <Carousel.Item key={att.id}>
                  <div className={classes.carouseledit}>
                <img
                  className="d-block w-100"
                  src={att.image_url}
                  alt="Third slide"
                />
                </div>
                <Link href='/events/[evtid]' as={`/events/${att.id}`}>
            <a>
                <Carousel.Caption style={{color: 'blue', backgroundColor :'rgba(250, 204, 210, 0.45)'}}>
                 
                  <h3>{att.name}</h3>
                  <h5>{moment(att.start_date).format('MMMM Do YYYY, h:mm:ss a')}</h5>
                  <h6><b>{att.location.city},{att.location.state}</b></h6>
                  <p>
                    {att.description} 
                    
                  </p>
                </Carousel.Caption>
                </a> 
              </Link>
              </Carousel.Item>
             
          ))}
    
    
      </Carousel>
      </div>
    );
  }
  
export default Carouselcont