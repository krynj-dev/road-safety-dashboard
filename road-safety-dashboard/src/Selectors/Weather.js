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
                <Form.Select onChange={(event) => {this.updateTarget(event)}}>
                    <option>All</option>
                    <option>Clear</option>
                    <option>Raining</option>
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
}

export default Weather;