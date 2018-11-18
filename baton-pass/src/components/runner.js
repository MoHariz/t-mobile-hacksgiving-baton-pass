
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Runner extends Component {

    static defaultProps = {
        center: {
          lat: 47.5815936,
          lng: -122.1517312
        },
        zoom: 15
      };

    onClick(obj){ 
        console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event)
    ;}


    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBTFjt9CuqK-kxwxNF7grsPafnHBSVUfD8" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                onClick={_onClick}
              >
                <AnyReactComponent
                  lat={47.5815936}
                  lng={-122.1517312}
                  text={'Current Location'}
                />
              </GoogleMapReact>
            </div>
          );
    }

}