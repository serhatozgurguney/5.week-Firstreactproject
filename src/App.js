import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Celcius from "./Celcius";
import Fahrenheit from "./Fahrenheit";
import Kelvin from "./Kelvin";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      derece: 0
      
    };
  } 
  render() {
      return (
        <div>
        <Container>
          <Row>
          <h1>Hava Nasıl</h1>
          <p>Şuan sıcaklık: {this.state.derece} derece.</p>
          <div>
          <button onClick={() => this.setState({ derece: this.state.derece + 1 })}>Sıcaklık Artır</button>
          </div>
          </Row>
          <Row>
            <p>3 Birimde Sıcaklık Ölçümü</p>
          </Row>
          <Row>
            <Col xs="4">
              <Celcius c={this.state.derece}/>
            </Col>
            <Col xs="4">
              <Fahrenheit  f = {this.state.derece* 1.8 +32}/>
            </Col>
            <Col xs="4">
              <Kelvin k = {this.state.derece + 273.15}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
