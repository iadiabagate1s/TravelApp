
import React, {useState} from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SportCont from '../components/sportscont'

export default function NavTab() {

  const CatList = ['music','visual-arts', 'performing-arts', 'film', 'lectures-books', 'fasion','food-and-drinks','festivals-fairs', 'charities', 'sports-active-life','nightlife','kids-family', 'other']
  const [key, setKey] = useState('music')
  const [key2, setKey2] = useState('charities')
  const [key3, setKey3] = useState('lectures-books')
  console.log(key)
    return (
        <div>

<Tab.Container id="left-tabs-example" defaultActiveKey="music">
  <Row>
    <Col md={2}>
      <Nav style={{marginTop : '10px'}} variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="music" onSelect={() => setKey('music')} title='music'>Music</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="sports-active-life" onSelect={() => setKey('sports-active-life')} title=''>Sports & Active Life</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="nightlife" onSelect={() => setKey('nightlife')} >NightLife</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="kids-family" onSelect={() => setKey('kids-family')} >Kids & Family</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="festivals-fairs" onSelect={() => setKey('festivals-fairs')} >Festivals & Fairs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="food-and-drink" onSelect={() => setKey('food-and-drink')} >Food & Drinks</Nav.Link>
        </Nav.Item>
      </Nav>
      
    </Col>
    <Col  xs={12} md={10}>
      <Tab.Content>
      
          
          <Tab.Pane eventKey={key}>
            <SportCont category={key} />
          </Tab.Pane>
          
        
      </Tab.Content>
    </Col>
  </Row>
  </Tab.Container>




            
        </div>
    )
}
