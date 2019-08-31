import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <hr className="footer-horizontal-line" color="red" align="left" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={4}>
                            <h3>
                                GHS79 Golf
                            </h3>
                            <p>
                                Golf tournaments held by the Guilderland High School class of 
                                1979 directly benefiting charitible organizations.
                            </p>
                        </Col>
                        <Col xs={12} sm={4}>
                            <h4>Site map</h4>
                            <p>
                                GHS79 is an organization in which Golf Tournaments will be
                                held in order to generate money for charitable organizations.
                            </p>
                        </Col>
                        <Col xs={12} sm={4}>
                            <h4>Next event:</h4>
                            <h5>Rory Healy Memorial Tournament</h5>
                            <h5>Date: 09/28/2018</h5>
                            <h6>Time: 12:00pm</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <hr className="footer-horizontal-line" color="#f81d1d" />
                            <h5>Copyright WebAmbrosia LLC @ 2019</h5>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
