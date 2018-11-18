import React, { Component } from 'react';


export default class Button extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <button type="button" class="btn btn-secondary btn-lg btn-block mt-4">{this.props.buttonText}</button>
        );
    }
}