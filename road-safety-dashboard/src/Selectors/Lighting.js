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
                <Form.Select onChange={(event) => {this.updateTarget(event)}}>
                    <option>All</option>
                    <option>Daylight</option>
                    <option>Darkness</option>
                    <option>Dawn/Dusk</option>
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
}

export default Lighting;