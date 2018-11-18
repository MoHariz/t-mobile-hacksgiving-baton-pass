
import React, { Component } from 'react';


import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Runner extends Component {

    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
              {/* <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBTFjt9CuqK-kxwxNF7grsPafnHBSVUfD8" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text={'Kreyser Avrora'}
                />
              </GoogleMapReact> */}
            </div>
          );
    }

}