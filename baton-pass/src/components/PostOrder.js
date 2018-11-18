import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Main page that shows up when first logging into the app
export default class PostOrder extends Component {
    // constructor(props) {
    //     super(props);
    // };

    
    render() {
        // Davis made this array
        
        console.log("HELLO");
      

        return(
            <div>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Item</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter item name"></input>
                        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Price</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter item"></input>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );   
    }
}