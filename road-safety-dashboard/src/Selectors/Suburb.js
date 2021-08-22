import React from 'react';

import Form from 'react-bootstrap/Form';

class Suburb extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return(
            <Form>
                <Form.Label>Suburb</Form.Label>
                <Form.Select onChange={(event) => {this.updateTarget(event)}}>
                    <option>All</option>
                    {this.generateSuburbList()}
                </Form.Select>
            </Form>
        );
    } 

    updateTarget(event) {
        let choice = event.target.value;
        if (choice != "All"){
            this.props.changeFunc({suburb: choice});
        }
        else {
            this.props.changeFunc({suburb: null});
        }
    }

    generateSuburbList() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://localhost:5000/api/get-suburbs", false);
        xhttp.send( null );
        var resJson = JSON.parse(xhttp.responseText);
        resJson["suburbs"].sort();
        return(resJson["suburbs"].map(function(d, idx) {
            return(<option key={idx}>{d}</option>);
        } ));
    }
}

export default Suburb;