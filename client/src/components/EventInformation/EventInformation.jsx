import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import { Carousel } from 'react-bootstrap';
import { AwesomeButton } from 'react-awesome-button';
import './EventInformation.scss';

export default class EventInformation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rory: true,
            jdrf: false,
            falcony: false,
            costumes: false
        }
    }
    onChooseRory() {
        this.setState({
            
        })
    }
    
    state = {
        viewport: {
          width: 400,
          height: 400,
          latitude: 37.7577,
          longitude: -122.4376,
          zoom: 8
        }
      };

    render() {
        return (
            <div className="main-container">
                <div className="sub-container">
                    <div className="spacer" />
                    <div className="rory-tournament-info">
                        <div className="pricing-and-location">
                            <h3>Join us for the 2019 Rory Healy Memorial Golf Tournament</h3>
                            <h4>Saturday, September 28th</h4>
                            <h5>Tee time will be 12pm sharp.</h5>
                            <p>Golfing will cost $75</p>
                            <p>Dinner will cost $50</p>
                            <h5>Scroll down to meet Rory</h5>
                        </div>
                    </div>
                    <div className="rory-tournament-info">
                    <ReactMapGL
                        {...this.state.viewport}
                        onViewportChange={(viewport) => this.setState({viewport})}
                    />
                    <h5>The tournament will be help at the White Plains Golf Course.</h5>
                    </div>
                </div>
                <div className="information-sub-container-two">
                    <div className="about-rory-healy-tournament">
                        <div className="vertical-spacer1" />
                        <div className="about-rory-healy-tournament-content">
                            <h4>Rory Healy Memorial Tournament</h4>
                            <p>
                                Rory was a character. Dressing up as: "The Great Falcony" at his
                                favorite football teams games is just the start. Rory will be remembered
                                as a brother, a son, a friend, a lover, and an amazing individual always
                                willing to help.
                            </p>
                        </div>
                    </div>
                        <div className="rory-image">
                            <img
                                className="rory"
                                alt="rory"
                                src="/assets/rory-final.png"
                            />
                        </div>
                        <div className="vertical-spacer1" />
                </div>
                <div className="information-sub-container-one">
                    <div className="rory-image-navigation">
                        <p>
                            rory was a recipient of organ donations therefore the revenue generated from this
                            tournament will be given to Donate Life America.
                        </p>
                        <AwesomeButton type="primary">
                            Rory
                        </AwesomeButton>
                        <AwesomeButton type="primary">
                            Rory at JDRF
                        </AwesomeButton>
                        <AwesomeButton type="primary">
                            Falcony
                        </AwesomeButton>
                        <AwesomeButton type="primary">
                            Costumes
                        </AwesomeButton>
                    </div>

                    <div className="rory-images">
                        <Carousel state={rory}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/assets/rory/rory1.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/assets/rory/rory2.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/assets/rory/rory3.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>

                        <Carousel state="jdrf">
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/assets/costumes/rory-clown.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/assets/costumes/rory-deadpool.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/assets/costumes/rory-goosebumps.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>

                        <Carousel value="falcony">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/assets/jdrf/jdrf1.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/assets/jdrf/jdrf2.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/assets/jdrf/jdrf3.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                    </div>
                </div>
            </div>
        )
    }
}
