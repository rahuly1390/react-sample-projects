import React, { useState } from "react";
import { Tab, Tabs} from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import { Col,Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaHandHoldingUsd,FaWallet,FaLink, FaAngleLeft } from 'react-icons/fa';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Accounts = () => {
    const [key, setKey] = useState('holding');
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
    <section>
        <Button className='ml-1 mb-3' onClick={handleShow}><FaAngleLeft/> All Accounts <FaLink/></Button>
        <div className='d-flex section-header'>
        <div className='section-box'>
        <h4 className='text-custom font-style'>Total Assets <FaLink/></h4>
        <p>$95,582,127.95</p>
        </div>
        <div className='section-box'>
        <h4 className='text-custom font-style'>Today's Market Change <FaLink/></h4>
        <p className='text-success'>$64,277.21/ + 0.07%</p>
        </div>
        <div className='section-box'>
        <h4 className='text-custom font-style'>Total Market Value <FaLink/></h4>
        <p>$95,582,127.95</p>
        </div>
        </div>

    </section>
    <section className='section-content mt-3'>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 custom-nav"
      fill
    >
      <Tab eventKey="holding" className="text-custom" title="Holdings">
      <h4 className="font-style">Assets Allocation</h4>
      <Table variant="light">
      <thead>
        <tr className="table-active">
          <th>Name </th>
          <th>Symbol Last($)/ As Of</th>
          <th>Price Change</th>
          <th>Quantity</th>
          <th>Market Value($)</th>
          <th>Today's Change</th>
          <th>Total Cost($)</th>
          <th>Div.per Share($)</th>
          <th>Cost basis</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>XYZ</td>
          <td>@NBC</td>
          <td>$64,20/0.05%</td>
          <td>30</td>
          <td>$5,350</td>
          <td>$151.90</td>
          <td>$5,890</td>
          <td>$0.89</td>
          <td></td>
        </tr>
        <tr>
          <td>ABC</td>
          <td>@NBC</td>
          <td>$64,20/0.05%</td>
          <td>30</td>
          <td>$5,350</td>
          <td>$151.90</td>
          <td>$5,890</td>
          <td>$0.89</td>
          <td></td>
        </tr>
        <tr>
          <td>WER</td>
          <td>@NBC</td>
          <td>$64,20/0.05%</td>
          <td>30</td>
          <td>$5,350</td>
          <td>$151.90</td>
          <td>$5,890</td>
          <td>$0.89</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    <Accordion defaultActiveKey="0" alwaysOpen>
      <Accordion.Item eventKey="0" className="mb-3">
        <Accordion.Header>Client1</Accordion.Header>
        <Accordion.Body>
        <Table hover variant="light">
      <tbody>
        <tr>
          <td>XYZ Share</td>
          <td>$274,465</td>
          <td>$151,438</td>
          <td>$240,490</td>
          <td>-</td>
        </tr>
        <tr>
        <td>QWE Share</td>
          <td>$274,465</td>
          <td>$151,438</td>
          <td>$240,490</td>
          <td>-</td>
        </tr>
        <tr>
        <td>DEF Share</td>
          <td>$274,465</td>
          <td>$151,438</td>
          <td>$240,490</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Client2</Accordion.Header>
        <Accordion.Body>
        <Table hover variant="light">
      <tbody>
        <tr>
          <td>XYZ Share</td>
          <td>$274,465</td>
          <td>$151,438</td>
          <td>$240,490</td>
          <td>-</td>
        </tr>
        <tr>
        <td>QWE Share</td>
          <td>$274,465</td>
          <td>$151,438</td>
          <td>$240,490</td>
          <td>-</td>
        </tr>
        <tr>
        <td>DEF Share</td>
          <td>$274,465</td>
          <td>$151,438</td>
          <td>$240,490</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

      </Tab>
      <Tab eventKey="activity" className="text-custom" title="Activity">
        Tab content for activity
      </Tab>
      <Tab eventKey="liablities" className="text-custom" title="Liablities">
        Tab content for liablities
      </Tab>
      <Tab eventKey="balance" className="text-custom" title="Balances">
        Tab content for balance
      </Tab>
      <Tab eventKey="document" className="text-custom" title="Documents">
        Tab content for document
      </Tab>
    </Tabs>
    </section>
    <section className='mt-3 mb-3'>
        <h5>Quick Filter on your asset class view:</h5>
    <Row>
        <Col className="mt-3">
        <Card style={{ height: '15rem' }}>
       <div className='badge-icon'><FaHandHoldingUsd/></div> 
            <Card.Body>
                <Card.Title>All</Card.Title>
                <Card.Text>
                <div className="d-flex">
                <h4 className='text-custom font-style'>Market Value -</h4>
                <h4 className='text-success'>$95,582,127.95</h4>
                </div>
                <div className="d-flex">
                <h4 className='text-custom font-style'>Market Value -</h4>
                <h4 className='text-success'>$95,582,127.95</h4>
                </div>
                </Card.Text>
               
            </Card.Body>
            </Card>
        </Col>
        <Col className="mt-3">
        <Card style={{ height: '15rem' }}>
       <div className='badge-icon'><FaHandHoldingUsd/></div> 
            <Card.Body>
                <Card.Title>Stocks/ Options</Card.Title>
                <Card.Text>
                <div className="d-flex">
                <h4 className='text-custom font-style'>Market Value -</h4>
                <h4 className='text-success'>$95,582,127.95</h4>
                </div>
                <div className="d-flex">
                <h4 className='text-custom font-style'>Market Value -</h4>
                <h4 className='text-success'>$95,582,127.95</h4>
                </div>
                </Card.Text>
               
            </Card.Body>
            </Card>
        </Col>
        <Col className="mt-3">
        <Card style={{ height: '15rem' }}>
       <div className='badge-icon'><FaHandHoldingUsd/></div> 
            <Card.Body>
                <Card.Title>ETFs/ CEFs</Card.Title>
                <Card.Text>
                <div className="d-flex">
                <h4 className='text-custom font-style'>Market Value -</h4>
                <h4 className='text-success'>$95,582,127.95</h4>
                </div>
                <div className="d-flex">
                <h4 className='text-custom font-style'>Market Value -</h4>
                <h4 className='text-success'>$95,582,127.95</h4>
                </div>
                </Card.Text>
               
            </Card.Body>
            </Card>
        </Col>
        <Col className="mt-3">
        <Card style={{ height: '15rem' }}>
       <div className='badge-icon'><FaWallet/></div> 
            <Card.Body>
                <Card.Title>Corporate Fixed Income</Card.Title>
                <Card.Text>
                <div className="d-flex">
                <h4 className='text-custom font-style'>Market Value -</h4>
                <h4 className='text-success'>$95,582,127.95</h4>
                </div>
                <div className="d-flex">
                <h4 className='text-custom font-style'>Market Value -</h4>
                <h4 className='text-success'>$95,582,127.95</h4>
                </div>
                </Card.Text>
               
            </Card.Body>
            </Card>
        </Col>
        <Col className="mt-3">
        <Card style={{ height: '15rem' }}>
       <div className='badge-icon'><FaWallet/></div> 
            <Card.Body>
                <Card.Title>Government Securities</Card.Title>
                <Card.Text>
                <div className="d-flex">
                <h4 className='text-custom font-style'>Market Value -</h4>
                <h4 className='text-success'>$95,582,127.95</h4>
                </div>
                <div className="d-flex">
                <h4 className='text-custom font-style'>Market Value -</h4>
                <h4 className='text-success'>$95,582,127.95</h4>
                </div>
                </Card.Text>
               
            </Card.Body>
            </Card>
        </Col>
        <Col className="mt-3">
        <Card style={{ height: '15rem' }}>
       <div className='badge-icon'><FaWallet/></div> 
            <Card.Body>
                <Card.Title>Unrealized Gain/Loss</Card.Title>
                <Card.Text>
                <div className="d-flex">
                <h4 className='text-custom font-style'>Market Value -</h4>
                <h4 className='text-success'>$95,582,127.95</h4>
                </div>
                <div className="d-flex">
                <h4 className='text-custom font-style'>Market Value -</h4>
                <h4 className='text-success'>$95,582,127.95</h4>
                </div>
                </Card.Text>
               
            </Card.Body>
            </Card>
        </Col>
    </Row>
    </section>
    <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>All Accounts</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul class="list-unstyled">
  <li>This is a list.</li>
  <li>It appears completely unstyled.</li>
  <li>Structurally, it's still a list.</li>
  <li>However, this style only applies to immediate child elements.</li>
  <li>Nested lists:
    <ul>
      <li>are unaffected by this style</li>
      <li>will still show a bullet</li>
      <li>and have appropriate left margin</li>
    </ul>
  </li>
  <li>This may still come in handy in some situations.</li>
</ul>
        </Offcanvas.Body>
      </Offcanvas>
</div>
  )
}

export default Accounts