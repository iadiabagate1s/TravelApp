
import React,{useState} from 'react'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Router } from 'blitz'
import Breadcrumb from 'react-bootstrap/Breadcrumb'




export default function SearchBar() {
    const INITIAL = {term:'', location :''}
    const [search, setSearch] = useState(INITIAL)
    


    const handleChange = event => {
    
    
        const {name, value}= event.target
        setSearch(search => ({
            ...search,
            [name]: value
        }))
    }
    const handleSub = (event)=>{
       
            event.preventDefault()
            setSearch(INITIAL)
            Router.push({
                pathname : "/search",
                query : search
            }
    
            )


          
      
      


    }


    
    return (
        <div style={{marginTop : '10px', marginBottom : "15px"}}>
            <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  
</Breadcrumb>
<Form  onSubmit={handleSub}>
<Form.Row>
    <Col>
      <Form.Control required as='select' onChange={handleChange} type='text' name='term' id='term' value={search.term}  >
         <option value="nightlife">Choose a category</option>
         <option value="music">Music</option>
         <option value="performing-arts">Performing Arts</option>
         <option value="visual-arts">Visual Arts</option>
         <option value="film">Film</option>
         <option value="lectures-books">Lectures & Books</option>
         <option value="fashion">Fashion</option>
         <option value="food-and-drink">Food & Drink</option>
         <option value="festivals-fairs">Festivals & Fairs</option>
         <option value="charities">Charities</option>
         <option value="sports-active-life">Sports & Active life</option>
         <option value="nightlife">Nightlife</option>
         <option value="kids-family">Kids & Family</option>
         </Form.Control>
   
    </Col>
    <Col>
      <Form.Control required  onChange={handleChange} type='text' name='location' id='location' value={search.location} placeholder="Enter address, neighborhood, city, state or zip" />
      
    </Col>
    <Button type='submit'>Search</Button>
  </Form.Row>
  
</Form>
</div>

    )
}
