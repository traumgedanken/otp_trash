import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { geolocated } from 'react-geolocated';
import { Button, Form, FormControl } from 'react-bootstrap';
import {
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText
} from 'reactstrap';

import Breadcrumbs from './Breadcrumbs';
import MyLoader from './Loader';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/Sorting.css';

class Tile extends Component {
    render() {
        const centre = this.props.data;
        return (
            <ListGroupItem>
                <ListGroupItemHeading>{centre.location}</ListGroupItemHeading>
                <ListGroupItemText>
                    Acceptable materials: <i>{centre.types.join(', ')}</i>
                    <br />
                    Distance: {parseInt(centre.distance)} meters
                </ListGroupItemText>
            </ListGroupItem>
        );
    }
}

class Sorting extends Component {
    constructor(props) {
        super(props);

        this.perPage = 4;
        this.state = {
            searchRequest: '',
            sortByDistance: 0,
            filtered: null,
            centres: null,
            activePage: 0,
            filter: {
                paper: false,
                glass: false,
                plastic: false
            }
        };

        this._handlePageClick = this._handlePageClick.bind(this);
        this._handleCheckBoxChange = this._handleCheckBoxChange.bind(this);
        this._handleSortButtonClick = this._handleSortButtonClick.bind(this);
        this._handleSearchInput = this._handleSearchInput.bind(this);
    }

    componentDidUpdate() {
        if (!this.state.centres && this.props.coords)
            fetch(
                `https://cors-anywhere.herokuapp.com/https://otp-trash.herokuapp.com/sorting`
            )
                .then(res => res.json())
                .then(centres => {
                    const processedArr = this._processResponse(centres);
                    this.setState({
                        centres: processedArr,
                        fileted: processedArr
                    });
                });
    }

    render() {
        return (
            <div className='main'>
                {this._renderBreadcrubms()}
                <div className='container'>
                    {!this.props.coords ? (
                        <h1>Sorry enable please geolocation</h1>
                    ) : this.state.centres ? (
                        <div>
                            {this._renderControls()}
                            {this._renderCheckboxes()}
                            {this._renderList()}
                            {this._renderPagination()}
                        </div>
                    ) : (
                        <MyLoader />
                    )}
                </div>
            </div>
        );
    }

    _processResponse(centres) {
        return centres.map(centre => {
            const foo = centre;
            foo.distance = this._calculateDistance(foo);
            return foo;
        });
    }

    _calculateDistance(center) {
        // approximate radius of earth in km
        const R = 6373;

        const lat1 = this.props.coords.latitude;
        const lon1 = this.props.coords.longitude;
        const lat2 = center.latitude;
        const lon2 = center.longitude;

        const dlon = lon2 - lon1;
        const dlat = lat2 - lat1;

        const a =
            Math.sin(dlat / 2) ** 2 +
            Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c * 10;
    }

    _filter() {
        let filtered = this.state.centres;
        for (let filterBy in this.state.filter) {
            if (this.state.filter[filterBy])
                filtered = filtered.filter(
                    centre => centre.types.indexOf(filterBy) !== -1
                );
        }
        return filtered;
    }

    _handlePageClick(data) {
        this.setState({ activePage: data.selected });
    }

    _handleCheckBoxChange(e) {
        this.setState({
            activePage: 0,
            filter: {
                ...this.state.filter,
                [e.target.id]: e.target.checked
            }
        });
    }

    _handleSortButtonClick() {
        const newSortValue =
            this.state.sortByDistance === 0 ? 1 : -this.state.sortByDistance;
        this.setState({ sortByDistance: newSortValue });
    }

    _handleSearchInput(e) {
        this.setState({ searchRequest: e.target.value });
    }

    _renderControls() {
        return (
            <div className='row'>
                <div className='col'>
                    <Button
                        variant='outline-dark'
                        onClick={this._handleSortButtonClick}
                    >
                        Sort by distanse
                    </Button>
                </div>
                <div className='col'>
                    <Form inline>
                        <FormControl
                            onInput={this._handleSearchInput}
                            type='text'
                            placeholder='Search'
                            className='mr-sm-2'
                        />
                    </Form>
                </div>
            </div>
        );
    }

    _renderPagination() {
        if (!this.filtered) return;
        return (
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                pageCount={this.filtered.length / this.perPage}
                onPageChange={this._handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active-page'}
            />
        );
    }

    _renderList() {
        const start = this.state.activePage * this.perPage;
        this.filtered = this._filter()
            .sort(
                (a, b) => this.state.sortByDistance * (a.distance - b.distance)
            )
            .filter(
                element =>
                    element.location.indexOf(this.state.searchRequest) !== -1
            );

        if (this.filtered.length === 0) return <h1>List is empty</h1>;

        return (
            <ListGroup>
                {this.filtered
                    .slice(start, start + this.perPage)
                    .map((centre, i) => (
                        <Tile key={centre.location + i} data={centre} />
                    ))}
            </ListGroup>
        );
    }

    _renderBreadcrubms() {
        return (
            <Breadcrumbs
                data={[
                    { link: '/', name: 'HOME' },
                    {
                        link: '/activity/sorting',
                        name: 'ACTIVITY',
                        disabled: true
                    },
                    { link: '/activity/sorting', name: 'SORTING' }
                ]}
            />
        );
    }

    _renderCheckboxes(name) {
        return (
            <div className='row checkboxes'>
                <div className='main-container'>
                    <p>PAPER</p>
                    <div className='checkbox-container yellow'>
                        <input
                            type='checkbox'
                            onChange={this._handleCheckBoxChange}
                            id='paper'
                        />
                        <label htmlFor='paper' />
                        <div className='active-circle' />
                    </div>
                </div>

                <div className='main-container'>
                    <p>PLASTIC</p>
                    <div className='checkbox-container green'>
                        <input
                            type='checkbox'
                            onChange={this._handleCheckBoxChange}
                            id='plastic'
                        />
                        <label htmlFor='plastic' />
                        <div className='active-circle' />
                    </div>
                </div>

                <div className='main-container'>
                    <p>GLASS</p>
                    <div className='checkbox-container purple'>
                        <input
                            type='checkbox'
                            onChange={this._handleCheckBoxChange}
                            id='glass'
                        />
                        <label htmlFor='glass' />
                        <div className='active-circle' />
                    </div>
                </div>
            </div>
        );
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false
    },
    userDecisionTimeout: 5000
})(Sorting);
