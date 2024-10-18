import React from 'react'
import { Col,Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaIdBadge,FaUsers,FaSuitcase } from 'react-icons/fa';
import { Link } from "react-router-dom";
const Planning = () => {
  return (
    <div>
        <section className='section-header'>
            <h2>Welcome to Retirement Plan Profile</h2>
        </section>
        <section className='section-banner'>
            <article>
                <h3>Your Road to sucess starts here</h3>
                <p>The key to building a good retirement plan is to begin accurate information about yourself</p>
                <button className='btn btn-custom'>Get Started</button>
            </article>
        </section>
        <section className='mt-3 mb-3'>
        <Row>
            <Col>
            <Card style={{ height: '18rem' }}>
           <div className='badge-icon'><FaIdBadge/></div> 
                <Card.Body>
                    <Card.Title>Your Personal information</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                   
                </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card style={{ height: '18rem' }}>
            <div className='badge-icon'><FaUsers/></div> 
                <Card.Body>
                    <Card.Title>Your retirement goal,income and expenses</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                 
                </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card style={{ height: '18rem' }}>
            <div className='badge-icon'><FaSuitcase/></div> 
                <Card.Body>
                    <Card.Title>Your accounts & contributions</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                  
                </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
        <Col md="auto" className='mx-auto'>
        <Button className='btn btn-custom mt-2'><Link className='link-class' to="retirement">Get Started</Link></Button>
        </Col>
        </Row>
        </section>
    </div>
  )
}

export default Planning