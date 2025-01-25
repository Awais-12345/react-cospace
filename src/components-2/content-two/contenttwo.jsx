import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './contenttwo.css'
const ContentTwo = () => {
  return (
    <div>
      <div className='Container-fluid  background'>
        <div className="row">
          <div className="col">
            <div className='main'>
              <span>Book Now</span>
              <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={1}>
                  Email:
                </Form.Label>
                <Col sm={3}>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={1}>
                  Password:
                </Form.Label>
                <Col sm={3}>
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export { ContentTwo }
