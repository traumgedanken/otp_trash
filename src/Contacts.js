import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap';
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
                <div className='center-container'>
                    <Card style={{ width: '500px' }}>
                        <Card.Img
                            variant='top'
                            src='data/very-cute-puppy.jpg'
                        />
                        <Card.Body>
                            <Card.Title>OTP KPI 2019 study project</Card.Title>
                            <Card.Text>
                                Author: Ihor Bulaievskyi
                                <br />
                                Telegram:
                                <a href='https://t.me/traumgedanken'>
                                    @traumgedanken
                                </a>
                                <br />
                                Mail: latente.traumgedanken@gmail.com
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}
