import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';
import { AwesomeButton } from 'react-awesome-button';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div style={{ height: '93vh', width: '100vw', paddingTop: '0vh' }}>
                    <LazyHero style={{ height: '93vh', width: '100vw' }} parallaxOffset="100" opacity=".6" imageSrc="/assets/golfCourse.jpg">
                        <Container>
                            <Row>
                                <Col>
                                    <Jumbotron style={{ background: '#708090', opacity: '.9' }}>
                                        <h1>Rory Healy Memorial Golf Tournament</h1>
                                        <h3>Saturday September 28th, 2019</h3>
                                        <p>
                                            this will be a tournament leading to the generation 
                                            of revenue for charity homie
                                        </p>
                                        <Link to="/SignUp">
                                            <AwesomeButton type="primary">Sign Up</AwesomeButton>
                                        </Link>
                                    </Jumbotron>
                                </Col>
                                <Col>
                                    <h4 style={{ paddingTop: '25vw' }}>$50 Dinner</h4>
                                    <h4>$75 Golf</h4>
                                </Col>
                            </Row>
                        </Container>
                    </LazyHero>
                </div>
                {/*<div style={{ height: '92vh', width: '100vw', paddingTop: '0vh' }}>

                </div>*/}
            </div>
        )
    }
}
