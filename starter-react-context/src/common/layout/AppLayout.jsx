import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import AppMain from '../main/AppMain';

export default class AppLayout extends Component {
    render() {
        return (
            <main role="main" className="container">
                <Route path={`${this.props.match.url}`} component={AppMain} />
            </main>
        );
    }
}