import React, { Component } from 'react';
import './About.scss';
import { Jumbotron } from 'react-bootstrap';
import { AwesomeButton } from 'react-awesome-button';
import { Link } from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="containers">
                    <Jumbotron className="about-rory-healy-tournament">
                        <div className="about-rory-healy-tournament-content">
                            <h4>Rory Healy Memorial Tournament</h4>
                            <p>
                                Rory was a character. Dressing up as: "The Great Falcony" at his
                                favorite football teams games is just the start. Rory will be remembered 
                                as a brother, a son, a friend, a lover, and an amazing individual always 
                                willing to help. 
                            </p>
                        </div>
                        <div className="rory-image">
                            <img className="rory" />
                        </div>
                    </Jumbotron>
                </div>
                <div className="containers">
                    <div className="GHS79-information">
                        <Jumbotron>
                            <h4>GHS79</h4>
                            <p>
                                GHS79 Golf will be hosting tournaments to generate revenue for charitable 
                                organizations. 
                            </p>
                            <Link to="/Sponsors">
                                <AwesomeButton>
                                    Proudly sponsored by
                                </AwesomeButton>
                            </Link>
                        </Jumbotron>
                    </div>
                </div>
                <div className="containers">
                    <h4>Many more to come</h4>
                </div>
            </div>
        )
    }
}
