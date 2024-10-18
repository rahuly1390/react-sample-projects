import React, { useEffect, useState } from 'react'
import { User } from '../models/User'
import { Card, Col, Container, Row } from 'react-bootstrap';

export const RandomUser:React.FC = () => {
    //fetch,data,state
    const [users, setUser] = useState<User[]>([]);
    const [loading,setLoading] = useState(true);

    const apiUrl = 'https://randomuser.me/api/?results=10';

    useEffect(()=>{
        fetch(`${apiUrl}`)
            .then(res => res.json())
            .then(data => {
                setUser(data.results);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error Fetching Users',error);
                setLoading(false);
            })
    },[])

  return (
    <Container>
        <Row>
            {loading ? (
                <p>Loading..</p>
            ):(
            users.map((user,index)=>(
                <Col md={4} key={index}>
                        <Card border='info' className='mb-3'>
                            <Card.Img variant="top" className='p-2 rounded-circle' src={user.picture.large} />
                            <Card.Body>
                                <Card.Title className='text-center'>{`${user.name.title}  ${user.name.first} ${user.name.last}`}</Card.Title>
                                <Card.Text>
                                        <p><strong>Email:</strong> {user.email}</p>
                                        <p><strong>Phone:</strong> {user.cell}</p>
                                        <p><strong>Age:</strong> {(new Date (user.dob.date)).toDateString()}</p>
                                        <p><strong>Location:</strong> {`${user.location.city}, ${user.location.country}`}</p>
                                    </Card.Text>
                            </Card.Body>
                   </Card>
                </Col>
            ))
        )}
        </Row>
    </Container>
  )
}
