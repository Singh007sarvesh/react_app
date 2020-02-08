import React, {Component} from 'react';
import Main from './main.js';
import HeaderBar from './Header.js';
import Footer from './Footer';
import '../stylesheets/header.css'

export default class Home extends Component{
    constructor(){
        super()
        this.state = {
            preLoader:true
        }
    }
    componentDidMount(){
       setTimeout(() => {
        this.setState({
            preLoader:false
        }) 
       }, 3000);
    }
    render(){
        if (this.state.preLoader){
           return ( <div id="preloader">
		<div class="preloader pulse">
			<h3>Karlene Hoard & Jonas Pare </h3>
		</div>
    </div>)
        }
        return(
           <div>
               
                <HeaderBar />
                <Main />
                <Footer />
            </div>
            
            
        );
    }
};