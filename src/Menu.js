import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavDropdown, Form } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import cookie from 'react-cookies';

export default class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = { user: cookie.load('user') };
    }

    render() {
        return (
            <Navbar bg='light' expand='lg' fixed='top'>
                <LinkContainer to='/'>
                    <Navbar.Brand>TRASH</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <LinkContainer to='/'>
                            <Nav.Link>HOME</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title='ACTIVITY' id='basic-nav-dropdown'>
                            <LinkContainer to='/activity/gallery'>
                                <NavDropdown.Item>GALLERY</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/activity/sorting'>
                                <NavDropdown.Item>SORTING</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <LinkContainer to='/contacts'>
                            <Nav.Link>CONTACTS</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Form inline>{this._renderUserInfo()}</Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }

    _handleGoogleResnonse(response) {
        if (!response || response.error) return this.setState({ user: null });
        const user = {
            name: response.profileObj.name,
            imageUrl: response.profileObj.imageUrl
        };
        cookie.save('user', user, { path: '/' });
        this.setState({ user });
    }

    _renderUserInfo() {
        if (this.state.user)
            return (
                <Navbar.Text>
                    {this.state.user.name}
                    <img
                        className='user-image'
                        alt='user avatar'
                        src={this.state.user.imageUrl}
                    />
                </Navbar.Text>
            );
        return (
            <GoogleLogin
                clientId='349786374195-8q7j1q1c251rvp0pmmcgkhmm5m736mlc.apps.googleusercontent.com'
                buttonText='Login'
                onSuccess={this._handleGoogleResnonse.bind(this)}
                onFailure={this._handleGoogleResnonse.bind(this)}
                cookiePolicy={'single_host_origin'}
            />
        );
    }
}
