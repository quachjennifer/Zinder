import React, {Component,useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Form, Button, FormGroup, FormControl, ControlLabel, DropdownButton, Dropdown, Jumbotron, Container } from "react-bootstrap";
import ParticlesBg from 'particles-bg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './data.json';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedA: null,
      selectedB: null
    };

    this.getSelectedValue1 = this.getSelectedValue1.bind(this);
    this.getSelectedValue2 = this.getSelectedValue2.bind(this);
    this.getSubmitForm=this.getSubmitForm.bind(this);
  }

  handleChange = selectedChoice => {
    this.setState({ selectedChoice });
  };

  getData1(){
    for(var i of data.Zodiac) {
      if(this.state.selectedA == i.zodiac_name) {
        console.log(i.info);
      }
    }
  }

  getData2(){
    for(var i of data.Zodiac) {
      if(this.state.selectedB == i.zodiac_name) {
        console.log(i.info);
      }
    }
  }
  
  getSelectedValue1(event){

    var sign1 = event.target.value;
    this.setState({selectedA: sign1}, this.getData1);
    console.log(sign1);
  }

  getSelectedValue2(event){
    var sign2 = event.target.value;
    this.setState({selectedB: sign2}, this.getData2);
    console.log(sign2);
  }
  
  getSubmitForm(event)
  {
    var first_zodiac=this.state.selectedA;
    var second_zodiac=this.state.selectedB;
    
    for(var i of data.Zodiac)
    {
      if(first_zodiac == i.zodiac_name) 
      {
        console.log(i.info);
        //open page 2
      }
      else if (second_zodiac == i.zodiac_name)
      {
        console.log(i.info);
      }
    }
    
  }
  render() {
    return(
      <Router>
        <div className="input" class="text-center">
        <ParticlesBg type="tadpole" bg={true} />
        
        <Jumbotron fluid >
          <Container>
            <h1>ZINDER</h1>
            <p>This is Zinder app.</p>
          </Container>
        </Jumbotron>

        <select id="signDrop" onChange={this.getSelectedValue1}>
          <option value="0" selected disabled hidden>your zodiac</option>
          <option value="Capricorn">Capricorn</option>
          <option value="Aquarius">Aquarius</option>
          <option value="Pisces">Pisces</option>
          <option value="Aries">Aries</option>
          <option value="Taurus">Taurus</option>
          <option value="Gemini">Gemini</option>
          <option value="Cancer">Cancer</option>
          <option value="Leo">Leo</option>
          <option value="Virgo">Virgo</option>
          <option value="Libra">Libra</option>
          <option value="Scorpio">Scorpio</option>
          <option value="Sagittarius">Sagittarius</option>  
        </select>

        <div class="divider"/> 

        <select id="signDrop2" onChange={this.getSelectedValue2}>
          <option value="0" selected disabled hidden>partner's zodiac</option>
          <option value="Capricorn">Capricorn</option>
          <option value="Aquarius">Aquarius</option>
          <option value="Pisces">Pisces</option>
          <option value="Aries">Aries</option>
          <option value="Taurus">Taurus</option>
          <option value="Gemini">Gemini</option>
          <option value="Cancer">Cancer</option>
          <option value="Leo">Leo</option>
          <option value="Virgo">Virgo</option>
          <option value="Libra">Libra</option>
          <option value="Scorpio">Scorpio</option>
          <option value="Sagittarius">Sagittarius</option>  
        </select>
        
        <div class="text-center" >
        <Button variant="primary" onClick={this.getSubmitForm}>Submit</Button>{' '} 

        </div>
        </div>
      </Router>
      );
    }
  }
export default App;