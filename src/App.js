import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import ParticlesBg from 'particles-bg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="input">
        <ParticlesBg type="tadpole" bg={true} />
          <Form>
            <Form.Group controlId="formBday">
              <Form.Label>Birth date</Form.Label>
              <Form.Control type="birthday" placeholder="Enter birthday(MMDDYYYY): " />
              <Form.Text className="text-muted">
                match or nah?? 
              </Form.Text>
            </Form.Group>
            
            <Form.Group controlId="formBday">
              <Form.Label>Birth date</Form.Label>
              <Form.Control type="birthday" placeholder="Enter another birthday(MMDDYYYY): " />
              <Form.Text className="text-muted">
                match or nah?
              </Form.Text>
            </Form.Group>
            
            <input class="btn btn-lg btn-primary btn-block" type="submit"></input>
          </Form>
        </div>


      </Router>
    );
  }
}

export default App;