import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './styles/Breadcrumbs.css';

export default class BreadCrumbs extends Component {
    render() {
        return (
            <Breadcrumb tag='nav' listTag='div'>
                {this.props.data.map((crumb, i, arr) => (
                    <LinkContainer key={crumb.name} to={crumb.link}>
                        <BreadcrumbItem
                            className={
                                (i === arr.length - 1 ? 'active-item' : '') +
                                (crumb.disabled ? 'disabled-item' : '')
                            }
                            tag='span'
                        >
                            {crumb.name}
                        </BreadcrumbItem>
                    </LinkContainer>
                ))}
            </Breadcrumb>
        );
    }
}
