import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import About from './components/About';
import Checkout from './components/Checkout';
import Sponsors from './components/Sponsors';

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