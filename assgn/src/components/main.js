import React from "react";
import {getResaurant} from '../core/apiClient';
import {Link} from 'react-router-dom';
import '../stylesheets/main.css'
import  { Redirect,withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {getResaurantName, sortBasedOnKey} from '../core/apiClient';
import Pagination from "react-js-pagination";

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            restaurant:[],
            flag:false,
            restaurantName:'',
            activePage: 1,
            itemsCountPerPage:0,
            totalItemsCount:0,
            next:'',
            previous:'',
        }
    }
    handlePageChange = (pageNumber) =>{
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
        let that = this;
        if (pageNumber == 1){
        getResaurant(pageNumber, this.state.itemsCountPerPage
            ).then((response)=>{
                console.log(response.data)
                that.setState({
                    restaurant:response.data['results'],
                    totalItemsCount:response.data.count,
                    itemsCountPerPage:response.data.limit,
                })
            }).catch((err)=>{
                console.log("Pls")
        })
        }
        else{
            console.log(pageNumber)
            let temp = 1;
            if (temp+this.state.itemsCountPerPage*(pageNumber-1)<this.state.totalItemsCount){
                console.log(temp+this.state.itemsCountPerPage*(pageNumber-1))
                console.log(this.state.totalItemsCount)
                console.log(this.state.itemsCountPerPage)
            getResaurant(temp+this.state.itemsCountPerPage*(pageNumber-1), this.state.itemsCountPerPage
                ).then((response)=>{
                    console.log(response.data)
                    that.setState({
                        restaurant:response.data['results'],
                        totalItemsCount:response.data.count,
                        itemsCountPerPage:response.data.limit,
                    })
                }).catch((err)=>{
                    console.log("Pls")
            })
        }
        else{
            console.log('6666666')
            temp=20;
            getResaurant(1,this.state.itemsCountPerPage
        ).then((response)=>{
                // console.log('#############')
                console.log(response.data['results'])
                that.setState({
                    restaurant:response.data['results'],
                    totalItemsCount:response.data.count,
                    itemsCountPerPage:response.data.limit,
                })
            }).catch((err)=>{
                console.log("Pls")
        })
        }
    }
    }
    componentDidMount(){
        let that = this;
        getResaurant('', ''
        ).then((response)=>{
                // console.log('#############')
                console.log(response.data)
                that.setState({
                    restaurant:response.data['results'],
                    totalItemsCount:response.data.count,
                    itemsCountPerPage:response.data.limit,
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
            <div>
            <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemsCountPerPage}
          totalItemsCount={this.state.totalItemsCount}
        //   pageRangeDisplayed={7}
          onChange={this.handlePageChange}
        />
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