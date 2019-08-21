import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <Container>
                    <Row>
                        <Col>
                            <h3>
                                Guilderland High School Class of 79 Golf Tournaments
                            </h3>
                        </Col>
                        <Col>
                            <p>
                                random stuff random stuffrandom stuff random stuff
                                random stuff random stuffrandom stuff random stuff
                                random stuff random stuffrandom stuff random stuff
                                random stuff random stuffrandom stuff random stuff
                            </p>
                        </Col>
                        <Col>
                            <h4>Coming up next:</h4>
                            <h5>Rory Healy Memorial Tournament</h5>
                            <h5>Date: 09/28/2018</h5>
                            <h6>Time: 12:00pm</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <h5>Copyright WebAmbrosia LLC 2019</h5>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
