import React, { Component } from 'react'; //import React Component
import EarbudPic from '../src/img/earbuds.jpeg'
import * as firebase from 'firebase/app';

import { BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';

export class S_OrderList extends Component {
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
            <h1>My Orders</h1> 
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

// class OrderCards extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }
//   handleClick() {
//     this.setState({ redirect: true })
//   }

  
//   post(recipe, index) {
//     this.postRecipe =  firebase.database().ref('posts/');
//     this.postRecipe.once("value") 
//       .then( (snapshot) => {
//         console.log(Object.keys(snapshot.val()).length);


//         let indexNum = 0;
//         let current = {};
//         if ( snapshot.val() === null ) {
//             indexNum = 0;
//         } else {
//             indexNum = Object.keys(snapshot.val()).length;
//             current = snapshot.val();
//         } 
//         let uid = recipe.uid;
//         let getindex = {}; 
//         getindex['index'] = index;
//         let posted = {};
//         posted['postedBy'] = uid;

//         //console.log(current[indexNum]);
//         let postNum = {}
//         console.log(index)
//         postNum.index = index;
//         postNum.likes = false;
//         postNum.postedBy = uid;
//         current["firebasePostId" + indexNum] = postNum
        
//         this.postRecipe.update(current);


//       });
//   }


//   render() {
//     let recipeList = this.props.recipes.map((recipe, index) => {
//       console.log(recipe);
//       if (this.state.redirect) {
//         return (<Redirect push to={"/RecipePage/" + recipe.uid + "/" + index} />);
//       } else {
//         return (
//           <div className="col-md-12 col-xl-6" key={"listRecipe" + index} onClick={() => this.handleClick()}>
//             <div className="card mb-3 foodCard">
//               {/* <div className="card-body"> */}
//               <div className="row">
//                 <div className="col cardCol mb-2 ml-3 mt-2">
//                   <CardImage imgName={recipe.image[0]} />
//                   <NavLink to='/explore' className="nav-link" activeClassName="activeLink" 
//                     type="button" 
//                     className="btn btn-secondary mt-5 mb-5 mr-3 "
//                     onClick={ () => this.post(recipe, index)}
//                   >
//                     Share
//                   </NavLink>
//                 </div>
//                 <div className="col cardCol mb-3 mr-3 mt-2 cardText">
//                   <h2 className="card-title text-left">{recipe.title}</h2>
//                   <p className="card-text text-left">
//                     {recipe.description}
//                   </p>
//                 </div>

//               </div>
//             </div>

//           </div>

//         )
//       }
//     });



//     return (
//       <main className="container">
//         <div className="row">
//           <div className="col-10">
//             <h2>My Recipes</h2>
//           </div>
//           <div className="col">
//             <button type="button" className="btn btn-primary mb-5 h3 addButton" data-toggle="modal" data-target="#addIngredient">
//                 Add New Recipe
//             </button>
//           </div>
//         </div>
//         <div className="cardsContainer container-fluid">
//           <div className="row ml-1">
//             {recipeList}
//           </div>
//         </div>
//       </main>
//     );

//   }
// }

// class CardImage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       imgUrl: ''
//     };
//   }

//   componentDidMount() {
//     let storageRef = firebase.storage().ref();

//     let imageRef = storageRef.child('img/' + this.props.imgName);

//     imageRef.getDownloadURL()
//       .then((url) => {
//         this.setState({ imgUrl: url })
//         let xhr = new XMLHttpRequest();
//         xhr.responseType = 'blob';
//         let x = xhr.onload = (event) => {
//           let blob = xhr.response;
//           return blob;
//         };

//         xhr.open('GET', url);
//         xhr.send();
//       })

//     firebase.database().ref().on('value', (snapshot) => {
//       imageRef.getDownloadURL()
//         .then((url) => {
//           this.setState({ imgUrl: url })
//           let xhr = new XMLHttpRequest();
//           xhr.responseType = 'blob';
//           // let x = xhr.onload = (event) => {
//           //   let blob = xhr.response;
//           //   return blob;
//           // };

//           xhr.open('GET', url);
//           xhr.send();
//         })
//     });
//   }

//   render() {
//     return (<img className="cardImg pb-3" src={this.state.imgUrl} alt="Food"></img>)
//   }
// }

export class NavBarBottom extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light fixed-bottom navBottom">
        <div className="table">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Explore</a> */}
              <NavLink to='/explore' className="nav-link" activeClassName="activeLink">Explore</NavLink>

            </li>
            <li className="nav-item">
              <NavLink exact to='/' className="nav-link" activeClassName="activeLink">Home</NavLink>

            </li>
            {/* <li className="nav-item">
              <NavLink to='/favorites' className="nav-link" activeClassName="activeLink">Favorite</NavLink>
            </li> */}
          </ul>
        </div>
      </nav>
    )
  }
}

export class NavBarTop extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top navTop">
        <h1 className="mt-2 mb-2 ml-2">BatonPass</h1>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="table">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink exact to='/' className="nav-link" activeClassName="activeLink">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/explore' className="nav-link" activeClassName="activeLink">Explore</NavLink>
              </li>
              

              {/* <li>
              <button className="btn btn-warning" 
                onClick={() => this.handleSignOut()}>
                Log Out {this.props.user.displayName}
              </button>
              </li> */}

              {/* <li className="nav-item">
                <NavLink to='/favorites' className="nav-link" activeClassName="activeLink">Favorite</NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export class HeaderBar extends Component {
  render() {
    return (
      
      <header className="headerBar bg-light justify-content-between" >
        <h1 className="mt-2 mb-2 ml-2">BatonPass</h1>
        {/* <button type="button" className="btn addButton btn-primary mt-2 mb-2 mr-2  float-right" data-toggle="modal" data-target="#addIngredient">
            <NavLink to='/add_recipe' className="nav-link" activeClassName="activeLink"><i className="fa fa-plus"></i></NavLink>
  
          </button> */}

      </header>
    );
  }
}