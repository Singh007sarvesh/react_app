import React, {Component} from 'react';
import './App.css';
import { Header } from './header';
import { Main } from './main';

export default class App extends Component{
  render(){
    return(
      <div className = "wrapper">
        <Header />
        <Main />
      </div>
    );
  }
};
