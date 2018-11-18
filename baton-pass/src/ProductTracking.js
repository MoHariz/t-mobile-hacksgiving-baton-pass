import React, { Component } from 'react'; //import React Component
import EarbudPic from '../src/img/earbuds.jpeg'
import * as firebase from 'firebase/app';

import { BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';

export class S_OrderList extends Component {
  render() {
    let recipeList = [];


    console.log("HELLO");
    // if (this.state.recipes != null) {

    //   Object.keys(this.state.recipes).forEach((recipe) => {
    //     console.log("newRecipe");
    //     console.log(this.state.recipes[recipe]);
    //     recipeList.push(this.state.recipes[recipe]);
    //   });
    //   return <FoodCards recipes={recipeList} />
    // }1



    return (
    <body>
        <header>
            <h1>Order #13572395</h1> 
        </header>
        <section>
            <div class="container col">
                    <OrderCards />
                    <OrderCards />       
                    <OrderCards />
                    <OrderCards />
            </div>
        </section>
    </body>
   );
  }
}
