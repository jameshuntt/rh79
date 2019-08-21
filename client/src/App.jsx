import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
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
                    <Route path="/About" component={About} />
                    <Route path="/SignUp" component={SignUp} />
                    <Route path="/SignIn" component={SignIn} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Sponsors" component={Sponsors} />
                    <Route path="/Checkout" component={Checkout} />
                </Switch>
                <Footer />
            </div>
        );
    }
}