import React from 'react';
import {getResaurantName, sortBasedOnKey} from '../core/apiClient';
import  { Redirect,withRouter, Link } from 'react-router-dom'
import {storeRestaurant} from '../redux/actions';
import { connect } from 'react-redux';
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            restaurantName:'',
            flag:false,
            query:'',
        }
    }
    change = (e)=>{
        this.setState({
            restaurantName: e.target.value,
            // flag:false
        });


    }
    sort = (e)=>{
        sortBasedOnKey({
                data:e.target.value
                }).then((response)=>{
                    console.log(response.data)
                }).catch((err)=>{
                    console.log("Pls")
                }
        )
    }
    searchRestaurantName = (e)=>{
        e.preventDefault();
        let that = this;
        this.setState({
            flag:true,
            query:this.state.restaurantName
        })
        
        this.setState({
            restaurantName:''
        })
        // return  <Redirect  to="/s/" />
    }
    render(){
        // console.log(this.state.flag)
        
        return(
            <nav className="navbar navbar-inverse">
               
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <ul className="nav navbar-nav">
                    <li className="active"><a href="/">Home</a></li>
                    <li>
                    
                    </li>
                    <li><a href="#">Page 2</a></li>
                    </ul>
                    <form className="navbar-form navbar-left" onSubmit={this.searchRestaurantName}>
                    <div className="input-group">
                        <input type="text" className="form-control" 
                        placeholder="Search" name="search" 
                        onChange={this.change} value={this.state.restaurantName}/>
                        <div className="input-group-btn">
                        <button className="btn btn-default" type="submit">
                            <i className="glyphicon glyphicon-search"></i>
                        </button>
                        {
                            this.state.flag && <Redirect  to={{pathname: '/s', search:'q='+this.state.query, state:{param:this.state.query}}} />
                        }
                        </div>
                    </div>
                    </form>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <div className="dropdown">
                            <span className="dropdown dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sort By
                            </span>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <input type="radio" name="gender" value="Votes" onClick={this.sort}/>
                            <span className='dropdowntext'>Votes</span><br/>
                            <input type="radio" name="gender" value="Aggregate_rating"
                            onClick={this.sort}/> <span className='dropdowntext'>Aggregate rating</span><br/>
                            <input type="radio" name="gender" value="Average_Cost_for_two" 
                            onClick={this.sort} /><span className='dropdowntext'>Average Cost for two</span> <br/>  
                            </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}
const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = {
    storeRestaurant,
};

const headerContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header));

  export default headerContainer;