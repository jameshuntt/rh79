import React from 'react';
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = ['side-drawer open'];
    }
    return(
        <nav className={drawerClasses}>
            <ul>
                <li>
                    <Link to="/">
                        <AwesomeButton type="primary">
                            Home
                        </AwesomeButton>
                    </Link>
                </li>
                <li>
                    <Link to="/About">
                        <AwesomeButton type="primary">
                            About us
                        </AwesomeButton>
                    </Link>
                </li>
                <li>
                    <Link to="/EventInformation">
                        <AwesomeButton type="primary">
                            Information
                        </AwesomeButton>
                    </Link>
                </li>
                <li>
                    <Link to="/Register">
                        <AwesomeButton type="primary">
                            Register
                        </AwesomeButton>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default sideDrawer;