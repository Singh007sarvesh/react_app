import React, {Component} from 'react';
import '../stylesheets/pogo-slider.min.css'
import '../stylesheets/style.css'
import '../stylesheets/responsive.css'
import '../stylesheets/bootstrap.min.css'
// import '../js/timeLine.min.js'



export default class Main extends Component{

    componentWillMount(){
        var countDownDate = new Date("Jan 1, 2020 01:00:0").getTime();
        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get today's date and time
            let now = new Date().getTime();
                
            // Find the distance between now and the count down date
            let distance = countDownDate - now;
                
            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
            // Output the result in an element with id="demo"
            document.getElementById("days").innerHTML = '<span>'+ days +'<h6 class="timer">Days</h6><span>'
            document.getElementById("hours").innerHTML = '<span>'+ hours +'<h6 class="timer">hours</h6><span>'
            document.getElementById("minutes").innerHTML = '<span>'+ minutes +'<h6 class="timer">minutes</h6><span>'
            document.getElementById("seconds").innerHTML = '<span>'+ seconds +'<h6 class="timer">seconds</h6><span>' 
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
            }, 1000);
    }    
    render(){
        
        return(
            <div>
                <div className="home-slider">
                    <ul className="rslides">
                        <li><img src={require('../images/slider-01.jpg')} alt="" /></li>
                        <li><img src={require('../images/slider-02.jpg')} alt="" /></li>
                        <li><img src={require('../images/slider-03.jpg')} alt="" /></li>
                    </ul>
                    <div className="lbox-details">
                        <h1>Karlene Hoard  & Jonas Pare</h1>
                        <h2>We're getting married</h2>
                        <div className="countdown main-time clearfix">
                            <div id="timer">
                                <h3> 1 January 2020</h3>
                                <div id="days"></div>
                                <div id="hours"></div>
                                <div id="minutes"></div>
                                <div id="seconds"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Strat About  */}
                <div id="about" className="about-box">
                    <div className="about-a1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="title-box">
                                        <h2>Jonas Pare <span> & </span> Karlene Hoard </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="row align-items-center about-main-info">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="about-m">
                                                <div className="about-img">
                                                    <img className="img-fluid" src={require("../images/about-img-01.jpg")}  alt="" />
                                                </div>
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-6 col-sm-12">
                                            <h2> <i className="fa fa-heart-o" aria-hidden="true"></i> <span>Jonas Pare</span> <i className="fa fa-heart-o" aria-hidden="true"></i></h2>
                                            <p>Fusce convallis ante id purus sagittis malesuada. Sed erat ipsum, suscipit sit amet auctor quis, vehicula ut leo. Maecenas felis nulla, tincidunt ac blandit a, consectetur quis elit. Nulla ut magna eu purus cursus sagittis. Praesent fermentum tincidunt varius. Proin sit amet tempus magna. Fusce pellentesque vulputate urna. </p>
                                        </div>
                                    </div>
                                    <div className="row align-items-center about-main-info">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="about-m">
                                                <div className="about-img">
                                                    <img className="img-fluid" src={require("../images/about-img-02.jpg")} alt="" />
                                                </div>
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-6 col-sm-12">
                                            <h2> <i className="fa fa-heart-o" aria-hidden="true"></i> <span>Karlene Hoard </span> <i className="fa fa-heart-o" aria-hidden="true"></i></h2>
                                            <p>Fusce convallis ante id purus sagittis malesuada. Sed erat ipsum, suscipit sit amet auctor quis, vehicula ut leo. Maecenas felis nulla, tincidunt ac blandit a, consectetur quis elit. Nulla ut magna eu purus cursus sagittis. Praesent fermentum tincidunt varius. Proin sit amet tempus magna. Fusce pellentesque vulputate urna. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About */}
                {/* Start Story */}
                <div id="story" className="story-box main-timeline-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title-box">
                                    <h2>Our Story</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </div>
                            </div>
                        </div>
                        <div className="timeLine">
                            <div className="row">
                                <div className="lineHeader hidden-sm hidden-xs"></div>
                                <div className="lineFooter hidden-sm hidden-xs"></div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 item" >
                                        <div className="caption">
                                            <h1>Hello</h1>
                                            <div className="star center-block">
                                                <span className="h3">01</span>
                                                <span>March </span>
                                                <span>2017</span>
                                            </div>
                                            <div className="image">
                                                <img src="images/time-01.jpg" alt="" />
                                                <div className="title">
                                                    <h2>First Meet <i className="fa fa-angle-right" aria-hidden="true"></i></h2>
                                                </div>
                                            </div>
                                            <div className="textContent">
                                                <p className="lead">We met at the wedding of our close friends and immediately found a common language, so a year later our first date happened.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 item">
                                        <div className="caption">
                                            <div className="star center-block">
                                                <span className="h3">03</span>
                                                <span>April</span>
                                                <span>2017</span>
                                            </div>
                                            <div className="image">
                                                <img src="images/time-02.jpg" alt="" />
                                                <div className="title">
                                                    <h2>First date <i className="fa fa-angle-right" aria-hidden="true"></i></h2>
                                                </div>
                                            </div>
                                            <div className="textContent">
                                                <p className="lead">We met at the wedding of our close friends and immediately found a common language, so a year later our first date happened.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 item">
                                        <div className="caption">
                                            <div className="star center-block">
                                                <span className="h3">03</span>
                                                <span>May</span>
                                                <span>2017</span>
                                            </div>
                                            <div className="image">
                                                <img src="images/time-03.jpg" alt="" />
                                                <div className="title">
                                                    <h2>Proposal <i className="fa fa-angle-right" aria-hidden="true"></i></h2>
                                                </div>
                                            </div>
                                            <div className="textContent">
                                                <p className="lead">We met at the wedding of our close friends and immediately found a common language, so a year later our first date happened.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 item">
                                        <div className="caption">
                                            <div className="star center-block">
                                                <span className="h3">04</span>
                                                <span>June</span>
                                                <span>2017</span>
                                            </div>
                                            <div className="image">
                                                <img src="images/time-04.jpg" alt="" />
                                                <div className="title">
                                                    <h2>Engagement <i className="fa fa-angle-right" aria-hidden="true"></i></h2>
                                                </div>
                                            </div>
                                            <div className="textContent">
                                                <p className="lead">For 2 years of work as support engineer responsible about installing and maintenance SWIFT packages for banks. I gain a lot from it before i leave country.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 item">
                                        <div className="caption">
                                            <div className="star center-block">
                                                <span className="h3">04</span>
                                                <span>July</span>
                                                <span>2017</span>
                                            </div>
                                            <div className="image">
                                                <img src="images/time-05.jpg" alt="" />
                                                <div className="title">
                                                    <h2>My Wedding <i className="fa fa-angle-right" aria-hidden="true"></i></h2>
                                                </div>
                                            </div>
                                            <div className="textContent">
                                                <p className="lead">Since then i came to Austria as refugee far from my lovers and friends far a way escaping from wars and threats searching a new life that i didn't find until yet.</p>
                                            </div>
                                        </div>
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* start family */}
                <div id="family" className="family-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title-box">
                                    <h2>Family</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="single-team-member">
                                    <div className="family-img">
                                        <img className="img-fluid" src={require("../images/family-01.jpg")} alt="" />
                                    </div>
                                    <div className="family-info">
                                        <h4>Mr. Alonso Wiles </h4>
                                        <p> Leida’s Father </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="single-team-member">
                                    <div className="family-img">
                                        <img className="img-fluid" src={require("../images/family-02.jpg")} alt="" />
                                    </div>
                                    <div className="family-info">
                                        <h4>Mr. Evon Wiles </h4>
                                        <p> Leida’s Mother </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="single-team-member">
                                    <div className="family-img">
                                        <img className="img-fluid" src={require("../images/family-03.jpg")} alt="" />
                                    </div>
                                    <div className="family-info">
                                        <h4>Mr. Chris Wiles </h4>
                                        <p> Leida’s Brother </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="single-team-member">
                                    <div className="family-img">
                                        <img className="img-fluid" src={require("../images/family-04.jpg")} alt="" />
                                    </div>
                                    <div className="family-info">
                                        <h4>Mr. Adina Wiles </h4>
                                        <p> Leida’s Sister </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="single-team-member">
                                    <div className="family-img">
                                        <img className="img-fluid" src={require("../images/family-05.jpg")} alt="" />
                                    </div>
                                    <div className="family-info">
                                        <h4>Mr. Annetta Wiles </h4>
                                        <p>Leida’s Sister </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="single-team-member">
                                    <div className="family-img">
                                        <img className="img-fluid" src={require("../images/family-06.jpg")} alt="" />
                                    </div>
                                    <div className="family-info">
                                        <h4>Mr. Ladonna Wiles </h4>
                                        <p>Leida’s Sister </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* start wedding */}
                <div id="wedding" className="wedding-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title-box">
                                    <h2>Wedding</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="serviceBox">
                                    <div className="service-icon"><i className="flaticon-bachelorette-party"></i></div>
                                    <h3 className="title">Bachelor Party </h3>
                                    <h4>04 July 2017 at 7:30 pm</h4>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur, deleniti eaque excepturi.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="serviceBox">
                                    <div className="service-icon"><i className="flaticon-wedding"></i></div>
                                    <h3 className="title">Wedding Ceremony </h3>
                                    <h4>05 July 2017 at 9:30 pm</h4>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur, deleniti eaque excepturi.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="serviceBox">
                                    <div className="service-icon"><i className="flaticon-reception-bell"></i></div>
                                    <h3 className="title">Reception Ceremony </h3>
                                    <h4>06 July 2017 at 10:30 pm</h4>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur, deleniti eaque excepturi.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                {/* Start Contact */}

                <div id="contact" className="contact-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title-box">
                                    <h2>Contact wth us</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-xs-12">
                                <div className="contact-block">
                                    <form id="contactForm">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required data-error="Please enter your name" />
                                                    <div className="help-block with-errors"></div>
                                                </div>                                 
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" placeholder="Your Email" id="email" className="form-control" name="name" required data-error="Please enter your email" />
                                                    <div className="help-block with-errors"></div>
                                                </div> 
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <select className=" form-control custom-select d-block" id="guest" required data-error="Please select an item in the list.">
                                                    <option disabled selected>Number Of Guest*</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    </select>
                                                    <div className="help-block with-errors"></div>
                                                </div> 
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <select className="custom-select d-block form-control" id="event" required data-error="Please select an item in the list.">
                                                    <option disabled selected>I Am Attending*</option>
                                                    <option value="1">All events</option>
                                                    <option value="2">Wedding ceremony</option>
                                                    <option value="3">Reception party</option>
                                                    </select>
                                                    <div className="help-block with-errors"></div>
                                                </div> 
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group"> 
                                                    <textarea className="form-control" id="message" placeholder="Your Message" rows="8" data-error="Write your message" required></textarea>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                                <div className="submit-button text-center">
                                                    <button className="btn btn-common" id="submit" type="submit">Send Message</button>
                                                    <div id="msgSubmit" className="h3 text-center hidden"></div> 
                                                    <div className="clearfix"></div> 
                                                </div>
                                            </div>
                                        </div>            
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>    
        );
    }
};
