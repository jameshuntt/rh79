import React, { Component } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import { Link } from 'react-router-dom';
import { Col, Container, Row, Dropdown } from 'react-bootstrap';
import './CustomNavbar.scss'

export default class CustomNavbar extends Component {
    render() {
        return (
            <div id="container" style={{ width: '100vw', height: '8vh', background: 'black', opacity: '.8', display: 'flex', flexDirection: 'row' }}>
                    <div style={{ display: 'flex', marginRight: '0' }}>
                        <Link to="/"><AwesomeButton style={{ paddingTop: '1vh', paddingRight: '1vw', paddingBottom: '1vh', paddingLeft: '1vw' }} type="primary">Home</AwesomeButton></Link>
                        <Link to="/About"><AwesomeButton style={{ paddingTop: '1vh', paddingRight: '1vw', paddingBottom: '1vh', paddingLeft: '1vw' }} type="primary">About</AwesomeButton></Link>
                    </div>
                    <div style={{ display: 'flex' }} className="spacer" />
                    <div style={{ display: 'flex', margin: '0', padding: '0' }}>
                        <img style={{ height: '7vh', width: '13vh' }} src="/assets/GHS79.png" />
                    </div>
                    <div style={{ display: 'flex' }} className="spacer" />
                    <div>
                        {/*<Dropdown style={{zIndex: '500'}}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
        </Dropdown>*/}
                        <Link to="/SignIn"><AwesomeButton style={{ paddingTop: '1vh', paddingRight: '1vw', paddingBottom: '1vh', paddingLeft: '1vw' }} type="primary">Sign in</AwesomeButton></Link>
                        <Link to="/Sponsors"><AwesomeButton style={{ paddingTop: '1vh', paddingRight: '1vw', paddingBottom: '1vh', paddingLeft: '1vw' }} type="primary">Sponsors</AwesomeButton></Link>
                    </div>
            </div>
        )
    }
}
