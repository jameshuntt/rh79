import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Contact.scss';
import { AwesomeButton } from 'react-awesome-button';
import axios from 'axios';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            message: '',
            date: new Date()
        }
    }
        componentDidMount() {
            axios.get('https://localhost:5000/contact')
                .then(res => {
                    const contact = res.data;
                    this.setState({contact})
                });
        };

        onChangeFirstName = event => {
            this.setState({
                firstName: event.target.value
            });
        }

        onChangeLastName = event => {
            this.setState({
                lastName: event.target.value
            });
        }

        onChangePhoneNumber = event => {
            this.setState({
                phoneNumber: event.target.value
            });
        }

        onChangeEmail = event => {
            this.setState({
                email: event.target.value
            });
        }

        onChangeMessage = event => {
            this.setState({
                message: event.target.value
            });
        }

        onChangeDate = date => {
            this.setState({
                date: date
            });
        }

        onSubmit = event => {
            event.preventDefault();

            const contact = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phoneNumber: this.state.phoneNumber,
                email: this.state.email,
                message: this.state.message,
                date: this.state.date,
            }

            console.log(contact);

            axios.post('https://localhost:5000/contact/add', contact)
                .then(res => console.log(res.data));

            window.location = "/";
        }
    

    render() {
        return (
            <div className="containers">
                <Jumbotron className="jumbo">
                    <h4>Name</h4>
                    <input 
                        placeholder="First Name"
                        required
                        type="text"
                        value={this.state.firstName}
                        onChange={this.onChangeFirstName}
                    />
                    <input 
                        placeholder="Last Name"
                        required
                        type="text"
                        value={this.state.lastName}
                        onChange={this.onChangeLastName}
                    />
                    <h4>Contact</h4>
                    <input 
                        placeholder="name@example.com"
                        required
                        type="text"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                    />
                    <input 
                        placeholder="518-555-6038"
                        required
                        type="text"
                        value={this.state.phoneNumber}
                        onChange={this.onChangePhoneNumber}
                    />
                    <h4>message</h4>
                    <input
                        placeholder="message"
                        required
                        type="text"
                        value={this.state.message}
                        onChange={this.onChangeMessage}
                    />
                    <br></br>
                    <AwesomeButton 
                        type="primary"
                        onChange={this.onSubmit}
                    >Submit</AwesomeButton>
                </Jumbotron>
            </div>
        )
    }
}

