import React from 'react';
import {Link} from 'react-router-dom'
import {getResaurantDetailByName} from '../core/apiClient';


export default class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            query:''
        }
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
                <h1>Search</h1>
                {/* <Link to={{pathname: `/${'restaurantdetails/'+'abs'}`, query: {}}}>
                                <p>abs</p>
                            </Link> */}
            </div>
            
        )
    }
}