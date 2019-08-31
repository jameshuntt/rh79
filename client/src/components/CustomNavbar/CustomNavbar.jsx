import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import './CustomNavbar.scss';
import Backdrop from '../SideNav/Backdrop/Backdrop';
import SideDrawer from '../SideNav/SideDrawer/SideDrawer';

export default class CustomNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sideDrawerOpen: false
        }
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    render() {
        let backdrop;
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        return (
            <div className="navbar-container">
                <Link to="/" className="navbar-logo-link">
                    <img className="navbar-logo" src="/assets/GHS79.png" alt="logo" />
                </Link>
                <h5 className="navbar-brand">
                    Charity Golf Tournaments
                </h5>
                <div className="spacer1" />
                <div className="navbar-links">
                <Link to="/">
                    <AwesomeButton variant="danger" className="navbar-button" type="primary">
                        Home
                    </AwesomeButton>
                </Link>
                <Link to="/About">
                    <AwesomeButton variant="danger" className="navbar-button" type="primary">
                        About
                    </AwesomeButton>
                </Link>
                <Link to="EventInformation">
                    <AwesomeButton variant="danger" className="navbar-button" type="primary">
                        Information
                    </AwesomeButton>
                </Link>
                <Link to="/Register">
                    <AwesomeButton variant="danger" className="navbar-button" type="primary">
                        Register
                    </AwesomeButton>
                </Link>
                </div>
                <input className="burger-menu-icon" type="image" src="/assets/hamburger-menu-icon.jpg" alt="burger" onClick={this.drawerToggleClickHandler} />
                <div className="spacer2" />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
            </div>
        )
    }
}
