import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


// components
import Button from './Button';
import NavBar from './NavBar';

// Main page that shows up when first logging into the app
export default class HomePage extends Component {
    constructor(props) {
        super(props);
    };

    
    render() {
        let homeButtonText = ["Buyer", "Seller", "Runner"];

        let buttonTexts = []
        let buttons = []

        homeButtonText.forEach((text) => {
            // console.log("/"+text.toLowerCase())
            let buttonObj = (<NavLink to={"/"+text.toLowerCase()}>
                                <Button buttonText={text}/>
                            </NavLink>);
            buttons.push(buttonObj);
        })
        

        return(
            <div>
                <body>
                    <NavBar/>
                    {buttons}
                </body>
            </div>
        );   
    }
}