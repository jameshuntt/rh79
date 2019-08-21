import React, { Component } from 'react';
import './SignIn.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password: ''
        }
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const User =  {
            email: this.state.email,
            password: this.state.password
        }

        console.log(User);

        axios.get('http://localhost:5000/users/', User)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div className="sign-in-container">
                <form className="sign-in-form">
                    <h3>Email</h3>
                    <input
                        className="email-input-box"
                        type="text"
                        placeholder="name@example.com"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                    >
                    
                    </input>
                    <h3>Password</h3>
                    <input
                        className="password-input-box"
                        type="text"
                        placeholder="********"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                    >

                    </input>
                    <button onChange={this.onSubmit}>Submit</button>
                    <p>Don't have an account yet?</p>
                    <Link to="/signup"><button>Sign up here</button></Link>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
