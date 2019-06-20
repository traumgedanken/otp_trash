import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

import './styles/Loader.css';

export default class MyLoader extends Component {
    render() {
        return (
            <div className='loader-container'>
                <Loader type='Puff' color='#00BFFF' height='100' width='100' />
            </div>
        );
    }
}
