import React from 'react';

import Form from 'react-bootstrap/Form';

class Lighting extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return(
            <Form>
                <Form.Label>Lighting</Form.Label>
                <Form.Select onChange={(event) => {this.updateTarget(event)}}>
                    <option>All</option>
                    {this.generateLightingList()}
                </Form.Select>
            </Form>
        );
    } 

    updateTarget(event) {
        let choice = event.target.value;
        if (choice != "All"){
            this.props.changeFunc({lighting: choice});
        }
        else {
            this.props.changeFunc({lighting: null});
        }
    }

    generateLightingList() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://localhost:5000/api/get-lightings", false);
        xhttp.send( null );
        var resJson = JSON.parse(xhttp.responseText);
        resJson["lightings"].sort();
        return(resJson["lightings"].map(function(d, idx) {
            return(<option key={idx}>{d}</option>);
        } ));
    }
}

export default Lighting;