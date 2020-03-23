import React from 'react';
import {Link} from 'react-router-dom'
import {getResaurantDetailByName} from '../core/apiClient';
import Pagination from "react-js-pagination";


export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query:'',
            activePage: 1,
        }
    }
    handlePageChange = (pageNumber) =>{
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }
    componentDidMount(){
        // setTimeout(
        // this.setState({
        //     query:this.props.location.state.param,
        // }),1000)
        getResaurantDetailByName(
            this.props.location.state.param).then((response)=>{
                console.log(response)
            }).catch((err)=>{
                console.log("Pls")
        })
    }
    componentDidUpdate(prevprops, nextProps){
        if(this.props!= prevprops){
        getResaurantDetailByName(
            this.props.location.state.param).then((response)=>{
                console.log(response)
            }).catch((err)=>{
                console.log("Pls")
        })
    }
    }
    render(){
        
        console.log(this.props.location.state.param)
        console.log('&&&&&&&&&&&&&&&')
        console.log(this.state.query);
        return(
            <div>
                <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
            </div>
            
        )
    }
}