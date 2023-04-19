import React, { useEffect } from "react";
import "./App.css";
import Header  from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import Checkout from "./Checkout";
import Login  from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

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
    <Header />
      <Switch>
      <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Checkout/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);
}
export default App;