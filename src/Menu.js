import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Menu extends Component {
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
                        <NavDropdown title='GALLERY' id='basic-nav-dropdown'>
                            <LinkContainer to='/gallery/voluntary'>
                                <NavDropdown.Item>VOLUNTARY</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/gallery/sorting'>
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

export default Menu;
