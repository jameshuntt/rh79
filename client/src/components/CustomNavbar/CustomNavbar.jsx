import React, { Component } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import { Link } from 'react-router-dom';
import { Col, Container, Row, Dropdown } from 'react-bootstrap';
import './CustomNavbar.scss'

export default class CustomNavbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                    <div className="navbar-logo-container">
                        <img className="navbar-logo" src="/assets/GHS79.png" />
                    </div>
                    <div className="navbar-brand-container">
                        <h5 className="navbar-brand">
                            Guilderland High School Class of 1979 Charity Golf Tournaments
                        </h5>
                    </div>
                    <div className="spacer" />
                    <div>
                        <Link to="/">
                            <AwesomeButton className="navbar-button" type="primary">
                                Home
                            </AwesomeButton>
                        </Link>
                        <Link to="/About">
                            <AwesomeButton className="navbar-button" type="primary">
                                About us
                            </AwesomeButton>
                        </Link>
                        <Link to="/Register">
                            <AwesomeButton className="navbar-button" type="primary">
                                Register
                            </AwesomeButton>
                        </Link>
                    </div>
            </div>
        )
    }
}
