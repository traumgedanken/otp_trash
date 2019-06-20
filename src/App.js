import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import 'bootstrap/dist/css/bootstrap.css';

const slideImages = [
    'data/slider-image-1.jpg',
    'data/slider-image-2.jpg',
    'data/slider-image-3.jpg'
];

const properties = {
    duration: 1000,
    transitionDuration: 1500,
    infinite: true,
    indicators: true,
    arrows: true
};


class App extends Component {
    componentDidMount() {
        document.title = 'TRASH';
    }

    render() {
        return (
            <div className='container'>
                <Slide {...properties}>
                    {slideImages.map((image, i) => (
                        <div key={`slider-image-${i}`} className='each-slide'>
                            <div
                                style={{
                                    backgroundImage: `url(${image})`,
                                    height: '700px'
                                }}
                            />
                        </div>
                    ))}
                </Slide>
            </div>
        );
    }
}

export default App;
