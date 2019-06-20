import React, { Component } from 'react';
import MyLoader from './Loader';
import Breadcrumbs from './Breadcrumbs';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/Gallery.scss';

export default class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = { images: null };
    }

    componentDidMount() {
        fetch(
            `https://cors-anywhere.herokuapp.com/https://otp-trash.herokuapp.com/images`
        )
            .then(res => res.json())
            .then(images => this.setState({ images }));
    }

    render() {
        return (
            <div>
                <Breadcrumbs
                    data={[
                        { link: '/', name: 'HOME' },
                        {
                            link: '/activity/gallery',
                            name: 'ACTIVITY',
                            disabled: true
                        },
                        { link: '/activity/gallery', name: 'GALLERY' }
                    ]}
                />
                {this.state.images ? (
                    <Tiles data={this.state.images} />
                ) : (
                    <MyLoader />
                )}
            </div>
        );
    }
}

class Tiles extends React.Component {
    render() {
        return (
            <div className='tiles'>
                {this.props.data.map((url, i) => (
                    <Tile data={{ url: url, index: i }} key={i} />
                ))}
            </div>
        );
    }
}

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            mouseOver: false
        };
        // Bind properties to class instance
        this._clickHandler = this._clickHandler.bind(this);
        this._mouseEnter = this._mouseEnter.bind(this);
        this._mouseLeave = this._mouseLeave.bind(this);
    }
    // Event handlers to modify state values
    _mouseEnter(e) {
        e.preventDefault();
        if (this.state.mouseOver === false) {
            this.setState({
                mouseOver: true
            });
        }
    }
    _mouseLeave(e) {
        e.preventDefault();
        if (this.state.mouseOver === true) {
            this.setState({
                mouseOver: false
            });
        }
    }
    _clickHandler(e) {
        e.preventDefault();
        if (this.state.open === false) {
            this.setState({
                open: true
            });
        } else {
            this.setState({
                open: false
            });
        }
    }

    render() {
        // Modify styles based on state values
        let tileStyle = {};
        // When tile clicked
        if (this.state.open) {
            tileStyle = {
                width: '730px',
                position: 'absolute',
                margin: 0,
                top: `${40 + Math.floor(this.props.data.index / 3) * 320}px`,
                left: `${(window.innerWidth - 730) / 2}px`,
                boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
                transform: 'none'
            };
        } else {
            tileStyle = {
                width: '300px',
                height: '300px'
            };
        }

        return (
            <div className='tile'>
                <img
                    onMouseEnter={this._mouseEnter}
                    onMouseLeave={this._mouseLeave}
                    onClick={this._clickHandler}
                    src={this.props.data.url}
                    alt={`Our work: ${this.props.data.index}`}
                    style={tileStyle}
                />
            </div>
        );
    }
}
