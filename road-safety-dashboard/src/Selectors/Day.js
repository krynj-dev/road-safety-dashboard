import React from 'react';

import Form from 'react-bootstrap/Form';

class Day extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return(
            <Form>
                <Form.Select onChange={(event) => {this.updateTarget(event)}}>
                    <option>All</option>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                    <option>Sunday</option>
                </Form.Select>
            </Form>
        );
    } 

    updateTarget(event) {
        let choice = event.target.value;
        if (choice != "All"){
            this.props.changeFunc({day: choice});
        }
        else {
            this.props.changeFunc({day: null});
        }
    }
}

export default Day;