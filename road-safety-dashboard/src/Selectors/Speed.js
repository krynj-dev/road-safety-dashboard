import React from 'react';

import Form from 'react-bootstrap/Form';

class Speed extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return(
            <Form>
                <Form.Select onChange={(event) => {this.updateTarget(event)}}>
                    <option>All</option>
                    <option>50</option>
                    <option>60</option>
                    <option>70</option>
                    <option>80</option>
                    <option>90</option>
                    <option>100</option>
                </Form.Select>
            </Form>
        );
    } 

    updateTarget(event) {
        let choice = event.target.value;
        if (choice != "All"){
            this.props.changeFunc({speed: choice});
        }
        else {
            this.props.changeFunc({speed: null});
        }
    }
}

export default Speed;