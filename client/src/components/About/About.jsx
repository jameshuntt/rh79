import React, { Component } from 'react';
import './About.scss';
import { AwesomeButton } from 'react-awesome-button';
import { Link } from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
            <div className="main-container">
                {/*column*/}
                <div className="heading">
                    <h3>Who are we?</h3>
                </div>
                <div className="sub-container">
                    {/*row*/}
                    <div className="spacer" />
                    <div className="GHS79-images">
                        <h5>Organized by members of the 1979 graduating class of Guilderland High School.</h5>
                        <img className="GHS-logo" src="/assets/guilderland-HS-logo.png" alt="ghs79" />
                        <p>GHS79 Golf is in no way affiliated with the Guilderland Central School District.</p>
                    </div>
                    <div className="GHS79-information">
                        <h4 className="GHS79-information-content">GHS79</h4>
                        <p className="GHS79-information-content">
                            GHS79 Golf will be hosting tournaments to generate revenue for charitable 
                            organizations. 
                        </p>
                        <Link to="/Sponsors">
                            <AwesomeButton className="GHS79-information-content">
                                Proudly sponsored by
                            </AwesomeButton>
                        </Link>
                    </div>
                    <div className="spacer" />
                    {/*end row*/}
                </div>
                <div className="sub-container-two">
                    <div className="heading" />
                    <div className="top-spacer-sub-container">
                        <h4>Like our mission?</h4>
                        <p>Contact us now!</p>
                        <Link to="/Contact">
                            <AwesomeButton type="primary">
                                Contact us
                            </AwesomeButton>
                        </Link>
                    </div>
                </div>
                <div className="sub-container">
                    <h4>Many more to come</h4>
                </div>
            </div>
        )
    }
}
