import React, { useState } from "react";
import { Tab, Tabs} from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
const Assets = () => {
  const [key, setKey] = useState('overview');
  return (
    <>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 custom-nav"
      fill
    >
      <Tab eventKey="overview" className="text-custom" title="Overview">
      <h4>Assets</h4>
      <Table variant="light">
      <thead>
        <tr className="table-active">
          <th>Group/Assets</th>
          <th>Total Assets</th>
          <th>Available Cash($)</th>
          <th>Today's Change</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Total</td>
          <td>$5,350,151,438</td>
          <td>$5,350,151,438</td>
          <td>$5,350,151,438</td>
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
      <Tab eventKey="funds" className="text-custom" title="Available Funds(Cash + Loans)">
        Tab content for Available
      </Tab>
      <Tab eventKey="investment" className="text-custom" title="Investment Details">
        Tab content for Contact
      </Tab>
      <Tab eventKey="allocation" className="text-custom" title="Allocation">
        Tab content for allocation
      </Tab>
      <Tab eventKey="projected" className="text-custom" title="Projected Income">
        Tab content for projected
      </Tab>
    </Tabs>
    </>
  )
}

export default Assets