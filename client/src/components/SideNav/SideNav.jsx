import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SideNav extends Component {
    render() {
        return (
            <div className="side-nav-container">
                <div className="backdrop" />
                <div className="side-nav">
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                    <Link to="/About">
                        <button>About</button>
                    </Link>
                    <Link to="/EventInformation">
                        <button>Information</button>
                    </Link>
                    <Link to="/Register">
                        <button>Register</button>
                    </Link>
                </div>
            </div>
        )
    }
}
