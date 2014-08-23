/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var MainLayout = React.createClass({
    render() {
        return (
            <div className='container MainLayout'>
                <this.props.activeRouteHandler/>
            </div>
        );
    }
});

module.exports = MainLayout;