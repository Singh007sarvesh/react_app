import React, {Component} from 'react';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export class Header extends Component{
    render(){
        return(
            <header className="top-header">
                <nav className="navbar header-nav navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="index.html"></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd" aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbar-wd">
                            <ul className="navbar-nav">
                                <li><a className="nav-link active" href="#home">Home</a></li>
                                <li><a className="nav-link" href="#about">About Us</a></li>
                                <li><a className="nav-link" href="#story">Story</a></li>
                                <li><a className="nav-link" href="#family">Family</a></li>
                                <li><a className="nav-link" href="#gallery">Gallery</a></li>
                                <li><a className="nav-link" href="#wedding">Wedding</a></li>
                                <li><a className="nav-link" href="#events">Events</a></li>
                                <li><a className="nav-link" href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
};