import React, { Component } from 'react';
import Breadcrumbs from './Breadcrumbs';

export default class Sorting extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}
