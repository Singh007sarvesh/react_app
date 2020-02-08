import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import RestaurantDetail from './components/restaurantdetails';
import Search from './components/s';
// import { Footer } from 'react-bootstrap/lib/Modal';

function App() {
  return (
    <div className="App">
        <Header />
        <Route exact path="/restaurants/:id" component={RestaurantDetail}/>
        <Route exact path="/" component={Home}/>
        <Switch>
          <Route exact path="/s" component={Search}/>
        </Switch>
    </div>
  );
}

export default App;
