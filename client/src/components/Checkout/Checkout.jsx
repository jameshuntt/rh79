import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import './Checkout.scss';

export default class Checkout extends Component {
  render() {
    return (
      <div className="checkout-main-container">
        <div className="checkout-sub-container">
          <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
            <div className="example">
              <h1>React Stripe Elements Example</h1>
              <Elements>
                <CheckoutForm />
              </Elements>
            </div>
          </StripeProvider>
        </div>
        <div className="checkout-sub-container">
          <h1>Now with PayPal</h1>
        </div>
      </div>
    );
  }
}
