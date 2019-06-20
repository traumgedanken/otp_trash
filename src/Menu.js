import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

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
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
