import React from 'react'
import { Col,Row,Card } from 'react-bootstrap';
import { FaMapMarkedAlt,FaWallet,FaUmbrella,FaRegSnowflake,FaChartPie,FaHandHoldingUsd} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Retirement = () => {
  return (
    <div>
        <section className='container'>
        <Row className='mb-3'>
            <Col>
            <Card style={{ height: '26rem' }}>
                <div className='bg-body-tech text-center'>
            <article className='title-icon'>Your Journey</article>
           <div className='badge-icon-retirement'><FaMapMarkedAlt/></div> 
           </div>
                <Card.Body>
                    <Card.Title className='text-center text-custom'>On Track</Card.Title>
                    <Card.Text className='mt-3'>
                        <span className='text-2l'>What does this mean for you?</span><br></br>
                    <span className='mt-2'>Our Projections currently indicate that you're highly likely to achieve
your goals if you stay aligned to plan.</span>
                    </Card.Text>
                   
                </Card.Body>
                </Card>
            </Col>
            <Col md="auto">
                <div className='section-header'>
                <h5 className='text-custom'>Your Main Objective</h5>
                <div className='d-flex text-center mt-2'>
                    <div className='box-child'>
                        <span className='text-2l'>75</span><br></br>
                        <span>Your Desired Retirement<br></br> Age</span>
                    </div>
                    <div className='box-child'>
                    <span className='text-2l'>$9,199/yr</span><br></br>
                        <span>Desired total Retirement<br></br> Spending in 2029</span>
                    </div>
                    <div className='box-child'>
                    <span className='text-2l'>$7,359 / yr</span><br></br>
                        <span>Essential Spending Amount <br></br>in 2029</span>
                    </div>
                </div>
                <Link >Full Plan Objectives</Link>
                </div>
                <div className='section-header'>
                <h5 className='text-custom mb-3'>Your Portfolio Outlook</h5>
                <div className='d-flex text-center mt-2'>
                    <div className='box-child'>
                        <span className='text-custom text-2l'><FaWallet/></span> <br></br>
                        <span className='text-2l'>$236K</span><br></br>
                        <span>Current</span>
                    </div>
                    <div className='box-child'>
                        <span className='text-custom text-2l'><FaUmbrella/></span><br></br>
                        <span className='text-2l'>$516K - $676K</span><br></br>
                        <span>At Retirement (in 6yrs)</span>
                    </div>
                    <div className='box-child'>
                        <span className='text-custom text-2l'><FaRegSnowflake/></span><br></br>
                        <span className='text-2l'>$1.6M - $3.1M</span><br></br>
                        <span>At End of Plan</span>
                    </div>
                </div>
                <Link >Full Portfolio Projection</Link>
                </div>
 
            </Col>
            </Row>
            <Row>
                <h3 className='text-center mb-3 text-secondary'>What areas affect your success and outlook over time?</h3>
                <Col className='text-center'>
                <div className='section-header'>
                
                <div className='d-flex text-center mt-2'>
                    <div className='box-child-big'>
                    <h3 className='text-custom mb-3'><FaWallet/></h3> <br></br>
                    <h5 className='text-custom'>Your Portfolio Value</h5>
                    <h6 className='text-secondary'>No Target Available</h6>
                    <p className='custom-space'>Portfolio value</p>
                        <span className='text-2l'>$235,087</span>
                        <p className='custom-space'>Portfolio Target</p>
                        <span className='text-2l'>$0</span><br></br>
                        <Link >View Details</Link>
                    </div>
                    </div>
                    </div>
                </Col>
                <Col className='text-center'>
                <div className='section-header'>
                <div className='d-flex text-center mt-2'>
                    <div className='box-child-big'>
                    <h3 className='text-custom mb-2'><FaHandHoldingUsd/></h3> <br></br>
                    <h5 className='text-custom'>Your Savings this Year</h5>
                    <h6 className='text-secondary'>Not Aligned to Plan</h6>
                    <p className='custom-space'>Assumed Portfolio Savings</p>
                        <span className='text-2l'>$4,387</span>
                        <p className='custom-space'>Planned Portfolio Savings</p>
                        <span className='text-2l'>$6,317</span><br></br>
                        <Link >Cash Flow Details</Link>
                    </div>
                    </div>
                    </div>
                </Col>
                <Col className='text-center'>
                <div className='section-header'>
                <div className='d-flex text-center mt-2'>
                    <div className='box-child-big'>
                    <h3 className='text-custom mb-3'><FaChartPie/></h3> <br></br>
                    <h5 className='text-custom'>Your Asset Allocation</h5>
                    <h6 className='text-secondary'>Not Aligned to Plan</h6>
                    <p className='custom-space'>Perdiocally review your assets allocations with your financial advisor as they will change over a time.</p>
                        <br></br>
                        <Link >Allocation Details</Link>
                    </div>
                    </div>
                    </div>
                </Col>
            </Row>
        </section>
    </div>
  )
}

export default Retirement