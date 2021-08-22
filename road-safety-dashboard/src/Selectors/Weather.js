import React from 'react';

import Form from 'react-bootstrap/Form';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return(
            <Form>
                <Form.Label>Weather</Form.Label>
                <Form.Select onChange={(event) => {this.updateTarget(event)}}>
                    <option>All</option>
                    {this.generateWeatherList()}
                </Form.Select>
            </Form>
        );
    } 

    updateTarget(event) {
        let choice = event.target.value;
        if (choice != "All"){
            this.props.changeFunc({weather: choice});
        }
        else {
            this.props.changeFunc({weather: null});
        }
    }

    generateWeatherList() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://localhost:5000/api/get-weathers", false);
        xhttp.send( null );
        var resJson = JSON.parse(xhttp.responseText);
        resJson["weathers"].sort();
        return(resJson["weathers"].map(function(d, idx) {
            return(<option key={idx}>{d}</option>);
        } ));
    }
}

export default Weather;