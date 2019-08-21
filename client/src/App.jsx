import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import EventInformation from './components/EventInformation/EventInformation';
import Checkout from './components/Checkout/Checkout';
import Sponsors from './components/Sponsors/Sponsors';
import Footer from './components/Footer/Footer';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <CustomNavbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/EventInformation" component={EventInformation} />
                    <Route path="/Register" component={Checkout} />
                    <Route path="/Sponsors" component={Sponsors} />
                </Switch>
                <Footer />
            </div>
        );
    }
}