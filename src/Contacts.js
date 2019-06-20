import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Breadcrumbs from './Breadcrumbs';

export default class Contacts extends Component {
    componentDidMount() {
        document.title = 'CONTACTS';
    }

    render() {
        return (
            <div>
                <Breadcrumbs
                    data={[
                        { link: '/', name: 'HOME' },
                        { link: '/contacts', name: 'CONTACTS' }
                    ]}
                />
            </div>
        );
    }
}
