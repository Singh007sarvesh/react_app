import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import Main from './Main';

export default class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <Main />
      </div>
    );
  }
};