import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import 'bootstrap/dist/css/bootstrap.css';

import Breadcrumbs from './Breadcrumbs';

const mapStyles = {
    width: '70vw',
    height: '75vh'
};

const officeLocation = { lat: 50.449151, lng: 30.449494 };

class Contacts extends Component {
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
                <div
                    className='container main'
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'row'
                    }}
                >
                    <Map
                        google={this.props.google}
                        zoom={16}
                        style={mapStyles}
                        initialCenter={officeLocation}
                    >
                        <Marker position={officeLocation} />
                    </Map>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBz6Vmyp-xtwUQycFHNL8CJ7gCLnUpbcsY'
})(Contacts);
