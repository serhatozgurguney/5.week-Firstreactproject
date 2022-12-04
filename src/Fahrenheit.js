import React, { Component } from "react";

class Fahrenheit extends Component {
    render() {
        return (
            <div>
                <p>Fahrenheit : {this.props.f} </p>
                
            </div>
        );
    }
}

export default Fahrenheit;