import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import EarbudPic from '../img/earbuds.jpeg';

export default class SellerPage extends Component {
//   constructor() {

    // this.state = {
    //   recipes: null
    // };
//   }

//   componentDidMount() {
//     this.recipeRef = firebase.database().ref('recipes');
//     let recipes = [];

//     let check = firebase.database().ref('recipes/' + this.props.user.uid);
//     check.once("value")
//       .then((snapshot) => {

//         let newList = snapshot.val();
//         this.setState({ recipes: newList });

//       })

//     firebase.database().ref().on('value', (snapshot) => {
//       let currentUser = this.props.user.uid;

//       let newList = snapshot.val().recipes[currentUser];

//       this.setState({ recipes: newList });
//     });
//   }

//   handleClick() {
//     this.setState({ redirect: true })
//   }

  render() {
    let recipeList = [];


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
            <h1>My Orders</h1> 
        </header>
            <NavLink to ='/PostOrder' className="nav-link btn btn-dark text-white mb-2" 
                activeClassName="activeLink"> Post Package
            </NavLink>
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

class OrderCards extends Component {

    render() {
        return(
            <div class="col-md-12 col-xl-8 ml-auto mr-auto">
                <div class="card mb-4">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-auto">
                            <img src={EarbudPic} alt="the diamond suit symbol" class="pb-3" />
                        </div>
                        <div class="col-sm">
                            <h2 class="card-title">Generic White Earbuds</h2>
                            <p class="card-text">Order Status: In Transit</p>
                            <div class="col-4 col-xl-2 mr-auto ml-auto">
                                <a type="button" class="btn btn-dark text-white mb-2">Order Details</a>
                                <a type="button" class="btn btn-dark text-white mb-2">Track Order</a>
                                <a type="button" class="btn btn-dark text-white mb-2">Invoice Buyer</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}