import React, { Component } from 'react';


export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props[0]);

        return(
            <button type="button" class="btn btn-secondary btn-lg btn-block mt-4">Block level button </button>
        );
    }

}