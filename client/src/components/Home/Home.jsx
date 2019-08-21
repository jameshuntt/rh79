import React, { Component } from 'react';
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';
import { AwesomeButton } from 'react-awesome-button';
import { Link } from 'react-router-dom';
import './Home.scss'

export default class Home extends Component {
    render() {
        return (
                <div className="home-container">
                    <div className="current-tournament-info">
                                    <Jumbotron 
                                        className="home-jumbotron-rory-tournament"
                                    >
                                        <h1>
                                            Rory Healy Memorial Golf Tournament
                                        </h1>
                                        <h3>
                                            Saturday September 28th, 2019
                                        </h3>
                                        <p>
                                            this will be a tournament leading to the generation 
                                            of revenue for charity homie
                                        </p>
                                        <h4 className="home-dinner-heading">$50 Dinner</h4>
                                        <h4 className="home-golf-heading" >$75 Golf</h4>
                                        <div className="rory-healy-jumbotron-buttons">
                                            <Link to="/EventInformation">
                                                <AwesomeButton type="primary">
                                                    Event information
                                                </AwesomeButton>
                                            </Link>
                                            <div className="home-spacer" />
                                            <Link to="/Register">
                                                <AwesomeButton type="primary">
                                                    Register
                                                </AwesomeButton>
                                            </Link>
                                        </div>
                                    </Jumbotron>
                                </div>
                </div>
        )
    }
}
