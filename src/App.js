import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from "./firebase";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";
import {useEffect} from 'react'
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51MkE3nSBcqx1pTSxSTNBbeRGlsAF6VDirl6g5UFHyy5A7FipyFqtLEC4fI11c7jG1D1oMEhuHoUyUMLEjkaVNCOX00ELwsM3wD');
function App() {
  const[{}, dispatch]= useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
  
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
  
      if (authUser) {
        // the user just logged in / the user was logged in
  
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
        <Route path="/login" element={[<Login/>]}/>
          <Route path="/checkout" element={[<Header />, <Checkout/>]}/>
          <Route path="/payment" element={[<Header />,<Elements stripe={promise}><Payment /></Elements>]}/>
          <Route path="/" element={[<Header />, <Home />]}/>
        </Routes>
      </div>
    </Router>
  );
}


export default App;
