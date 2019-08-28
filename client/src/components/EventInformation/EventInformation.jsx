import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { Carousel } from 'react-bootstrap';
import { AwesomeButton } from 'react-awesome-button';
import './EventInformation.scss';

const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A'
  });

export default class EventInformation extends Component {
    renderComponent() {
        switch(this.state.displayedCarousel) {
            case "rory": return <Carousel state="rory">
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
            case "costumes": return <Carousel state="jdrf">
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
            case "jdrf": return  <Carousel value="falcony">
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
            case "costumes": return <Carousel>
                                        
                                    </Carousel>
        }
    }
    constructor(props) {
        super(props);

        this.state = {
            rory: true
        }
    }
    onChooseRory() {
        this.setState({
            rory: true
        })
    }
    onChooseJdrf() {
        this.setState({
            jdrf: true
        })
    }
    onChooseFalcony() {
        this.setState({
            falcony: true
        })
    }
    onChooseCostumes() {
        this.setState({
            costumes: true
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
                <div className="information-sub-container">
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
                    <Map
                        style="mapbox://styles/mapbox/streets-v9"
                        containerStyle={{
                            height: '50vh',
                            width: '50vw'
                        }}
                    >
                        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                            <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                        </Layer>
                    </Map>
                    <h5>The tournament will be help at the White Plains Golf Course.</h5>
                    <h3>**map is supposed to go here**</h3>
                    <h2>2350 Western Ave, Guilderland, NY 12084</h2>
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
                        <AwesomeButton type="primary" onClick={this.onChooseRory}>
                            Rory
                        </AwesomeButton>
                        <AwesomeButton type="primary" onClick={this.onChooseJdrf}>
                            Rory at JDRF
                        </AwesomeButton>
                        <AwesomeButton type="primary" onClick={this.onChooseFalcony}>
                            Falcony
                        </AwesomeButton>
                        <AwesomeButton type="primary" onClick={this.onChooseCostumes}>
                            Costumes
                        </AwesomeButton>
                    </div>

                    <div className="rory-images">
                        {this.state.displayedCarousel}
                    </div>
                </div>
            </div>
        )
    }
}
