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
                <Form.Select onChange={(event) => {this.updateTarget(event)}}>
                    <option>All</option>
                    {// Find way to get suburbs from api then map
                    }
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
}

export default Suburb;