import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaLink,FaPrint,FaDownload } from 'react-icons/fa';
import Assets from './Assets';
import Alerts from '../alerts/Alerts';
import HistoricalCharts from '../historicalChart/HistoricalCharts';
const Home = () => {
  return (
    <>
    <div className='bg-card mb-3'>
       <Row>
        <Col> 
       <Card style={{ width: '16rem' }}>
      <Card.Body>
        <Card.Title className="mb-2 text-custom">Total Wealth <FaLink/></Card.Title>
        <Card.Text className="h2">
          $5,350,151,438
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    <Col> 
       <Card style={{ width: '16rem' }}>
      <Card.Body>
        <Card.Title className="mb-2 text-custom">Total Assets <FaLink/></Card.Title>
        <Card.Text className="h2">
          $5,350,151,438
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    <Col> 
       <Card style={{ width: '16rem' }}>
      <Card.Body>
        <Card.Title className="mb-2 text-custom">Today's Change <FaLink/></Card.Title>
        <Card.Text className="h2">
          $5,350,151,438
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    <Col> 
       <Card style={{ width: '16rem' }}>
      <Card.Body>
        <Card.Title className="mb-2 text-custom">Total Liablities <FaLink/></Card.Title>
        <Card.Text className="h2">
          $5,350,151,438
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
      </Row>
      <Row>
        <Col>
        <p className='mt-2 px-2'>
          As of 8/9/2023 12:00 AM ET | Refresh Market Data | <span className='text-custom'><FaLink/> Includes External Accounts</span>
        </p>
        </Col>
        <Col md="auto">
        <ul className="list-inline mt-2 px-2">
          <li className="list-inline-item"><FaPrint/> Print</li>
          <li className="list-inline-item"><FaDownload/> Download</li>
          </ul>
        </Col>
      </Row>
      </div>
      <Row>
      <Col md="auto" className='bg-card m-2 p-2'>
      <Assets/>
      </Col>
      <Col className='m-2'>
      <Alerts/>
      </Col>
      </Row>
      <HistoricalCharts/>
      </>
  )
}

export default Home