import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Gallery.scss';

const data = [
    '../data/collecting-1.jpg',
    '../data/collecting-2.jpg',
    '../data/collecting-3.jpg',
    '../data/collecting-4.jpg',
    '../data/collecting-5.jpg',
    '../data/collecting-6.jpg',
    '../data/collecting-7.jpg',
    '../data/collecting-8.jpg',
    '../data/collecting-9.jpg'
];

class Gallery extends Component {
    render() {
        return <Tiles data={data} />;
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

export default Gallery;
