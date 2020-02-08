import React, { Component }  from 'react';
import '../stylesheets/footer.css'
export default class Footer extends Component{
    constructor(){
        super();
    }
    alert = ()=>{
        console.log("hello")
    }
    render(){
        return(
        <footer className="footer-box">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="footer-company-name">All Rights Reserved. &copy; 2018 <a href="#">Sweetwedding</a> Design By : <a href="https://html.design/">html design</a></p>
                    </div>
                </div>
            </div>
	    </footer>

        );
    }
};

