import React, { Component } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import { Link } from 'react-router-dom';
import './ChaseHome.scss'

export default class Home extends Component {
    render() {
        return (
                <div className="home-container">
                    <div className="current-tournament-info">
                        <div className="home-jumbotron-rory-tournament">
                            <div className="home-jumbotron-rory-tournament-text">
                             <h1>
                                Rory Healy Memorial Golf Tournament
                            </h1>
                            <h3>
                                Saturday September 28th, 2019
                            </h3>
                            <p>
                                All Proceeds Will Be Donated To Donate Life America
                            </p>                               
                    
                            <p>
                                In Memory Of Rory Healy
                            </p>
                            <h4>$50 Dinner &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $75 Golf</h4>
                            </div>            
                            <div className="rory-healy-jumbotron-buttons">                    
                                <Link to="/Register">
                                    <AwesomeButton type="primary" className="home-jumbotron-button">
                                        Register
                                    </AwesomeButton>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
        )
    }
}