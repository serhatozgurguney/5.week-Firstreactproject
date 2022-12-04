import React, { Component } from "react";


class Celcius extends Component {
    
    render() {
        return (
            <div>
            <p>Celcius : {this.props.c}  </p>
        </div>
        );
    }
}

export default Celcius;