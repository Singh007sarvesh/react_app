import React, {Component} from 'react';
import './main.css'


export default class Main extends Component{
    render(){
        return (
            <div className='wrapper'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-sm-12 a'>
                            <span className='text-style-1'>Hands on with AI</span>
                            <span className='text-style-3'>/</span>
                            <span className='text-style-2'>Computer Vision</span>
                        </div>
                        <div className='col-lg-12 col-sm-12 b'>
                            <span className='text-style-4'>Computer Vision</span>
                        </div>
                        <div className='col-lg-12 col-sm-12 a'>
                            <span className='text-style-1'>Hands on with AI</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};