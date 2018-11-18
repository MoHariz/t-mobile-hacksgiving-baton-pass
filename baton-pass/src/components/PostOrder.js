import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase/app';

// Main page that shows up when first logging into the app
export default class PostOrder extends Component {
    // constructor(props) {
    //     super(props);
    // };

    saveRecipe() {
        if ( this.state.image.contains ) {
            let blob = this.state.image.file;
            console.log('there is a image');
            this.storageRef = firebase.storage().ref('img/' + this.state.image.name);
            this.storageRef.put(blob)
                .then( (snapshot) => {
                    console.log("Uploaded File!");
                });
        }
        
        this.check =  firebase.database().ref('recipes/' + this.props.user.uid);
        this.check.once("value") 
            .then( (snapshot) => {
                let newRecipe = this.state;
                let ingredientListToObj = this.arrayToObj(newRecipe.ingredientList);
                let instructionListToObj = this.arrayToObj(newRecipe.instructionList);
                newRecipe.ingredientList = ingredientListToObj;
                newRecipe.instructionList = instructionListToObj;


                
                let indexNum = 0;
                let current = {};
                if ( snapshot.val() === null ) {
                    indexNum = 0;
                } else {
                    indexNum = Object.keys(snapshot.val()).length;
                    current = snapshot.val();
                } 
                newRecipe.uid = this.props.user.uid;
                newRecipe.username = this.props.user.displayName;
                current[indexNum] = newRecipe;
                current[indexNum].image = this.state.image.name;
                console.log(current);
        
                this.check.update(current);

                this.setState({
                    title: "",
                    image: {name:"", file: {}},
                    ingredientList: [""],
                    instructionList: [""],
                    description: "",
                    servings: "",
                    cookTime: ""
                });

            })
            this.forceUpdate();
            this.forceUpdate()

    }

    
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