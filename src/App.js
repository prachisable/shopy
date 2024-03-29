import React, { useEffect } from "react";
import "./App.css";
import Header  from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Login  from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe(
  "pk_test_51N173ySBdtHp5FkQeVoa4XB0WHHZW5rCMaFLNriLT0lonm8XlPHVDbHHC1wzD7QAUviBkHQ5NEiMcuMroDPP58jq00AFT6bYFG"
  );
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //it will run when app comp loads

    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>>', authUser);

      if (authUser) {
        //the user was log in

        dispatch({
          type: 'SET_USER',
          user: authUser
          })
      } else {
        //user is log out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

return (
  // BEM
   <Router>
    <div className="app">
      <Switch>
      <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="">
          <Header />
          <Home/>
        </Route>
      </Switch>
    </div>
  </Router>
);
}
export default App;