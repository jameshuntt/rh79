//importing react (the javascript framework)
import React, { Component } from 'react';
//import our stylings (need node sass and postcss-loader in order to load .scss files)
import './SignUp.scss';
//import axios to connect fromt end to backend
import axios from 'axios';

//create the signup sub-class 
export default class SignUp extends Component {
    //create our props
    constructor(props) {
        //you always need super in javascript classes when defining a constructor of a sub-class
        super(props);

        //binding the values to "this"
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //set initial state by asigning object to this.state
        this.state = {
            //setting properties to our objects
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    //componentDidMount() is a react life-cycle method which are methods that will,
    //automatically call at different points, componentDidMount() will automatically,
    //be called before anything displays on the page
    componentDidMount() {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }


    //method that sets the state of firstName
    //e stands for event
    //does not replace state, rather updates the element within the state
    onChangeFirstName(e) {
        this.setState({
            //if we just console.log this, then it would be undefined
            //we need to know what "this" refers to, which is the class,
            //therefore we need to bind "this" to each of the methods
            firstName: e.target.value
            //target is the textbox
            //value is the value in the textbox
        })
    }
    
    //method that sets the state of lastName
    //e stands for event
    //does not replace state, rather updates the element within the state
    onChangeLastName(e) {
        this.setState({
            //if we just console.log this, then it would be undefined
            //we need to know what "this" refers to, which is the class,
            //therefore we need to bind "this" to each of the methods
            lastName: e.target.value
            //target is the textbox
            //value is the value in the textbox
        })
    }

    //method that sets the state of email
    //e stands for event
    //does not replace state, rather updates the element within the state
    onChangeEmail(e) {
        this.setState({
            //if we just console.log this, then it would be undefined
            //we need to know what "this" refers to, which is the class,
            //therefore we need to bind "this" to each of the methods
            email: e.target.value
            //target is the textbox
            //value is the value in the textbox
        });
    }

    //method that sets the state of password
    //e stands for event
    //does not replace state, rather updates the element within the state
    onChangePassword(e) {
        this.setState({
            //if we just console.log this, then it would be undefined
            //we need to know what "this" refers to, which is the class,
            //therefore we need to bind "this" to each of the methods
            password: e.target.value
            //target is the textbox
            //value is the value in the textbox
        })
    }

    //method that handles submit
    //e stands for event
    //does not replace state, rather updates the element within the state
    onSubmit(e) {
        //prevent default html form submit behavior from taking place,
        //instead we define the action below
        e.preventDefault();

        //defining what will happen with onSubmit()
        //normally we do not create a variable in react,
        //BUT we can create a variable inside a method if we only use it,
        //within that one specific method
        const newUser =  {
            //set the states states within our variable to our objects
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }

        //for now we log the data, this will be commented out later
        console.log(newUser);

        //send user data to backend
        axios.post('http://localhost:5000/users/add', newUser)
            .then(res => console.log(res.data));

        //axios.get('http://localhost:5000/signup/', signup)
          //  .then(res => console.log(res.data));

            //changes window location taking them back to home after they submit their signup
        window.location = '/';
    }

    render() {
        return (
            <div>
                <form>
                <div className="signup-container">
                    <div className="signup-form">
                        <div className="input-fields">
                            <label>First Name</label>
                            <input
                                required
                                className="signup-fields"
                                type="text"
                                placeholder="John"
                                value={this.state.firstName}
                                onChange={this.onChangeFirstName}
                            />

                            <label>Last Name</label>
                            <input
                                required
                                className="signup-fields"
                                type="text"
                                placeholder="Smith"
                                value={this.state.lastName}
                                onChange={this.onChangeLastName}
                            />

                            <label>Email</label>
                            <input
                                required
                                className="signup-fields"
                                type="text"
                                placeholder="name@example.com"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                            />

                            <label>Password</label>
                            <input
                                required
                                className="signup-fields"
                                type="text"
                                placeholder="********"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                            />

                        </div>
                        <div className="signup-buttons">
                            {/*<button>Sign up</button>*/}
                            <button onClick={this.onSubmit}>Sign up</button>
                            {/*<input type="submit" value="Create user" />*/}
                        </div>
                    </div>

                </div>
                </form>
                <div>
                    
                </div>
            </div>
        )
    }
}
