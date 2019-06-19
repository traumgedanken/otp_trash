import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';

class App extends Component {
    componentDidMount() {
        document.title = 'TRASH';
    }

    render() {
        return (
            <div>
                <AwesomeSlider cssModule={styles}>
                    <div data-src='/path/to/image-0.png' />
                    <div data-src='/path/to/image-1.png' />
                    <div data-src='/path/to/image-2.jpg' />
                </AwesomeSlider>
            </div>
        );
    }
}

export default App;
