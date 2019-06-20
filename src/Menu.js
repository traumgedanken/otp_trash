import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavDropdown, Form } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';

const responseGoogle = response => {
    console.log(response);
};

export default class Menu extends Component {
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
                    <Form inline>
                        <GoogleLogin
                            clientId='349786374195-8q7j1q1c251rvp0pmmcgkhmm5m736mlc.apps.googleusercontent.com'
                            buttonText='Login'
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
