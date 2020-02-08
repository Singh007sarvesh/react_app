import React from "react";
import {getResaurant} from '../core/apiClient';
import {Link} from 'react-router-dom';
import '../stylesheets/main.css'
import  { Redirect,withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {getResaurantName, sortBasedOnKey} from '../core/apiClient';

class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            restaurant:[],
            flag:false,
            restaurantName:'',
        }
    }
    componentDidMount(){
        let that = this;
        getResaurant(
            ).then((response)=>{
                that.setState({
                    restaurant:response.data
                })
            }).catch((err)=>{
                console.log("Pls")
        })
    }
    componentDidUpdate(prevprops, nextProps){
        
        if(this.props!= prevprops){
            document.getElementById("hide").style.display='none';
            setTimeout(
                this.setState({
                    flag:true,
                }),1000
            );
        }
    }
    render(){
        return(
            <div>
            <div id = 'hide'>       
                <h1>Restaurant Name</h1>
                {
                    this.state.restaurant.map((data,key)=>(
                        <div className = 'col-sm-3 col-xl-3 col-lg-3' key={key}>
                            <Link to={{pathname: `/${'restaurants/'+data.restaurantId}`, query: {}}}>
                                <p>{data.restaurantName}</p>
                            </Link>
                        </div>))
                }
                
            </div>
            <div>
                {
                   this.state.flag && 
                   this.state.restaurant.map((data, key)=>(
                    <div className='col-sm-3 col-xl-3 col-lg-3' key={key}>
                        <Link to={{pathname: `/${'restaurantdetails/'+data.restaurantId}`, query: {}}}>
                                <p>{data.restaurantName}</p>
                            </Link>
                    </div>
                   ))
                // <h1>Hello</h1>
                }
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    getRestaurantName:state.getRestaurantName.restaurantName,
})

const mapDispatchToProps = {
    // storeRestaurant,
}
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main));