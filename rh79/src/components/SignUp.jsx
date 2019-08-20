import React, { Component } from 'react';
import './SignUp.scss';
import axios from 'axios';

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        })
    }
    
    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        })
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

        const signup =  {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }

        console.log(signup);

        axios.get('http://localhost:5000/signup/', signup)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div className="signup-container">
                <div className="signup-form">
                    <div className="input-fields">
                        <label>First Name</label>
                        <input
                            className="fields"
                            type="text"
                            placeholder="John"
                            value={this.state.firstName}
                            onChange={this.onChangeFirstName}
                        >

                        </input>
                        <label>Last Name</label>
                        <input 
                            className="fields"
                            type="text"
                            placeholder="Smith"
                            value={this.state.lastName}
                            onChange={this.onChangeLastName}
                        >

                        </input>
                        <label>Email</label>
                        <input 
                            className="fields"
                            type="text"
                            placeholder="name@example.com"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        >

                        </input>
                        <label>Password</label>
                        <input 
                            className="fields"
                            type="text"
                            placeholder="********"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        >

                        </input>
                    </div>
                    <div className="signup-buttons">
                        <button>Sign up</button>
                        <button onClick={this.onSubmit}>Sign up</button>
                    </div>
                </div>    
            </div>
        )
    }
}
