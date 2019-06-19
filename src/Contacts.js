import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Contacts extends Component {
    componentDidMount() {
        document.title = 'CONTACTS';
    }

    render() {
        return <div className='container'>Contacts Page</div>;
    }
}

export default Contacts;
