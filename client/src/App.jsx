import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Checkout from './components/Checkout/Checkout';
import Sponsors from './components/Sponsors/Sponsors';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <CustomNavbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/EventInformation" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Sponsors" component={Sponsors} />
                    <Route path="/Register" component={Checkout} />
                </Switch>
                <Footer />
            </div>
        );
    }
}