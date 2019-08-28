import React, { Component } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import './Footer2.scss';

export default class Footer2 extends Component {
    render() {
        return (
            <div className="footer2-container">
                <hr className="footer2-horizontal-line" color="#f81d1d" />
                <div className="footer2-sub-container">
                <h5 className="column-one-footer">Guilderland High School Class of 79 Charity Golf Tournaments</h5>
                <hr className="footer2-vertical-line" color="#474747" />
                

                <hr className="footer2-vertical-line" color="#474747" />


                </div>
                
                <hr className="footer2-horizontal-line" color="#f81d1d" />
                <h5 className="copyright">Copyright @2019 WebAmbrosia LLC. All Rights Reserved.</h5>
            </div>
        )
    }
}
