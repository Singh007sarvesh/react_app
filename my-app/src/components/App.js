import React, {Component} from 'react';
import '../App.css';
import * as BootstrapComponents from 'react-bootstrap'
import {Grid, Col, Row }  from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';



class App extends Component{
  constructor(){
    super();
  }
  render (){
    return (
      
        <Home />
      
      
    )
  }
}
export default App;
