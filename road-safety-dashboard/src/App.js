import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 

import Month from './Selectors/Month';
import Day from './Selectors/Day';
import Suburb from './Selectors/Suburb';
import Speed from './Selectors/Speed';
import Weather from './Selectors/Weather';
import Lighting from './Selectors/Lighting';

import Displayer from './Displayer/Displayer';

import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      month: null,
      day: null,
      suburb: null,
      speed: null,
      weather: null,
      lighting: null
    }
    this.handleTheChange = this.handleTheChange.bind(this);
  }

  handleTheChange(obj) {
    console.log(obj);
    this.setState(obj);
  }

  render() {
    const month = this.state.month;
    const day = this.state.day;
    const suburb = this.state.suburb;
    const speed = this.state.speed;
    const weather = this.state.weather;
    const lighting = this.state.lighting;

    return (
      <div className="App">
        <header className="App-header">
          <h1>QLD Road Safety Dashboard</h1>
        </header>
        <Container className="Dashboard">
          <Row>
            <Col><Month changeFunc={this.handleTheChange}/></Col>
            <Col><Day changeFunc={this.handleTheChange}/></Col>
            <Col><Suburb changeFunc={this.handleTheChange}/></Col>
            <Col><Speed changeFunc={this.handleTheChange}/></Col>
            <Col><Weather changeFunc={this.handleTheChange}/></Col>
            <Col><Lighting changeFunc={this.handleTheChange}/></Col>
          </Row>
          <Row><Displayer month={month} day={day} suburb={suburb} speed={speed} weather={weather} lighting={lighting}/></Row>
        </Container>
      </div>
    );
  }
}

export default App;
