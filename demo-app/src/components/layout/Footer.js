import React from 'react'
import Form from 'react-bootstrap/Form';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-item'>Markets as of <br/> 08/14/23 5:17PM EDT</div>
      <div className='footer-item'>DJIA 35,281 0.00/0.00%</div>
      <div className='footer-item'>NASDAQ 13,665.76 0.00/0.00%</div>
      <div className='footer-item'>S & P 4,465.05 0.00/0.00%</div>
      <div className='footer-item'> 
      <Form.Control
              type="text"
              placeholder="Quote Search"
              className=" mr-sm-2"
            />
            </div>
    </div>
  )
}

export default Footer