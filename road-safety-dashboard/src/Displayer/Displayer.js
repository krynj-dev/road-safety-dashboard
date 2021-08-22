import React from 'react';


class Displayer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {this.props.month}
            </div>
        );
    } 
}

export default Displayer;