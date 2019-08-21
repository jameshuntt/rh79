import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './EventInformation.scss';

export default class EventInformation extends Component {
    render() {
        return (
            <div className="event-information-main-container">
                <div className="event-information-sub-container-two">
                    
                </div>
                <div className="event-information-sub-container-one">
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
                    </Jumbotron>
                        <div className="rory-image">
                            <img
                                className="rory"
                                alt="rory"
                                src="/assets/rory-final.png"
                            />
                        </div>
                </div>
                <div className="event-information-sub-container">
                    <p>
                        rory was a recipient of organ donations therefore the revenue generated from this
                        tournament will be given to (insert organ donation foundation here).
                    </p>
                </div>
            </div>
        )
    }
}
