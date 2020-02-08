import React, {Component} from 'react';
import './index.css'

export class Main extends Component{
    constructor(){
        super();
        this.state = {
            user1:[1,2,3,4,5,6,7,8,9],
            user2:[1,2,3,4,5],
            user3:[]
        }
    }
    moveUser1 = ()=>{
        if (this.state.user1.length>0){
            let a = this.state.user2.push(1)
            setTimeout(
                function() {
                    this.setState({user3:a });
                }
                .bind(this),
                100
        );
        this.state.user1.pop();
        }
        this.setState({user3:[] })
    }
    moveUser2 = ()=>{
        if (this.state.user2.length>0){
            let a = this.state.user1.push(1)
            setTimeout(
                function() {
                    this.setState({user3:a });
                }
                .bind(this),
                100
            );
            this.state.user2.pop();
        }
        
    }
    dispUser1 = () =>{
        return (
        this.state.user1.map(function(item, i){
            return (<p className='userdata' key={i}><img className='circle' src={require('./Ellipse1.png')}></img><span>Sarvesh</span></p>)
          })
        );
    }

    dispUser2 = () =>{  
        return (
        this.state.user2.map(function(item, i){
            return (<p className='userdata' key={i}><img className='circle' src={require('./Ellipse2.png')}></img></p>)
          })
        )
    }
    render(){
        const button1 = 'Move >>'
        const button2 = '<< Move'
        return(
            <div className='main'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 col-sm-5'>
                            <div className='box1'>
                                {
                                    this.state.user1.length>0 && this.dispUser1()

                                }
                                {
                                    this.state.user1.length<1 && <p>empty</p>

                                }
                            </div>
                        </div>
                        <div className='col-lg-2 col-sm-2'>
                            
                            <p className='button-center' ><button onClick={this.moveUser1}>{button1}</button></p>
                            <p className='button-center'><button onClick={this.moveUser2}>{button2}</button></p>
                        </div>
                        <div className='col-lg-5 col-sm-5'>
                            <div className='box1'>
                                {
                                    this.state.user2.length>0 && this.dispUser2()

                                }
                                {
                                    this.state.user2.length<1 && <p>empty</p>

                                }
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={this.addList}>
                    <input type ='text'  onChange={this.addData} />
                    <input type="submit"  value="SignUp"/>
                </form>
            </div>
        );
    }
};