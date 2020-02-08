import React from 'react';
import Header from './header';
import Main from './main';

export default class Home extends React.Component{
    render(){
        return(
            <div>
                {/* <Header /> */}
                <Main />
            </div>
        )
    }
}