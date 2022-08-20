import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export function MyVerticallyCenteredModal(props) {
    const mystyle = {
        color: "black",
        margin: "10px",
        textAlign:"center"
      };
      const input={
        borderRadius:"20px",
        height:"30px",
        width:"20vw",
        textAlign:"center"
      };
      const page={
        padding:"10px"
      };

      const btn={
        backgroundColor:"white",
        borderRadius: "40px",
        border: "1px solid aquamarine",
        padding: "5px 30px 5px 30px",
        fontSize: "20px"
      };

    return (
      <Modal style={mystyle}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h4>Login</h4>
          
    <Form style={page}>
        
      <Form.Group style={page} className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label>
        <Form.Control style={input} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group style={page} className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password &nbsp;&nbsp;</Form.Label>
        <Form.Control style={input} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group style={page} className="mb-3" controlId="formBasicCheckbox">
        <Form.Check  type="checkbox" label="Remember me" />
      </Form.Group>
      <Button style={btn} onClick={props.onHide}>
        Submit
      </Button>&nbsp;&nbsp;&nbsp;&nbsp;
      <Button style={btn} onClick={props.onHide}>Close</Button>
    </Form>

        </Modal.Body>
      </Modal>
    );
  }