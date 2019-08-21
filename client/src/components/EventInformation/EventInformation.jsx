import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './EventInformation.scss';

export default class EventInformation extends Component {
    render() {
        return (
            <div className="event-information-main-container">
                <div className="event-information-sub-container">
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
            </div>
        )
    }
}
