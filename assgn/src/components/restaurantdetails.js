import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import  { Redirect,withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {getResaurantDetail} from '../core/apiClient';

const mapStyles = {
    width: '50%',
    height: '70%',
    marginLeft: '20%',
    marginRight: '20%',
  };
class RestaurantDetail extends React.Component{
    constructor(){
        super();
        // 
        this.state = {
            restaurantDetail:[],
            longitude:0,
            latitude:0,
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    }
    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onClose = props => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
        }
    };
    
    componentDidMount(){

        let splitURL = this.props.location.pathname.split("/");
        let len = splitURL.length
        let restId = splitURL[len-1]
        let that = this;
        getResaurantDetail(restId).then((response)=>{
                that.setState({
                    restaurantDetail:[response.data],
                    latitude:response.data.Latitude,
                    longitude:response.data.Longitude
                })
            }).catch((err)=>{
                console.log("Pls")
            })
    }
    render(){
        // console.log(this.state.latitude)
        return(
            <div className='container'>
                <div className='row'>
                    <div>
                    <h1>Restaurant Details</h1>
                    {
                        this.state.restaurantDetail.map((data,key)=>(
                            <div className = '' key={key}>
                                <p>{data.restaurantName}</p>
                                <p>{data.Address}</p>
                        <p>{data.Cuisines}</p>
                            </div>))
                    }
                    </div>
                    <div>
                        {/* <Map
                            google={this.props.google}
                            zoom={14}
                            style={mapStyles}
                            initialCenter={{
                            lat: this.state.latitude,
                            lng: this.state.longitude
                            }}
                        >
                        <Marker onClick={this.onMarkerClick} name={'current location'} />
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                            >
                            <div>
                                <h4>{this.state.selectedPlace.name}</h4>
                            </div>
                        </InfoWindow>
                        </Map> */}
                    </div>
                </div>
            </div>
        )
    }
}
GoogleApiWrapper({
    apiKey: 'AIzaSyB1FFOKyytf0w9CjI05bIL8cny0xXRpvco'
  })(RestaurantDetail);

  const mapStateToProps = (state, ownProps) => ({
    // getRestaurant:state.getRestaurant.restaurant,
});

const mapDispatchToProps = {
};

const restaurantDetailContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(RestaurantDetail));

export default restaurantDetailContainer;