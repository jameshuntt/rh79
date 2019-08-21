import React, { Component } from 'react';
import './About.scss';
import { Jumbotron } from 'react-bootstrap';
import { AwesomeButton } from 'react-awesome-button';
import { Link } from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
            <div className="about-page-main-container">
                <div className="about-page-sub-container">
                    <div className="GHS79-images">
                        <img src="" alt="ghs79" />
                    </div>
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
                <div className="about-page-sub-container">
                    <h4>Many more to come</h4>
                </div>
            </div>
        )
    }
}
