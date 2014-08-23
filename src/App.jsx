/** @jsx React.DOM */
'use strict';

var React  = require('react');

// Router
var Router = require('react-router');
var Route  = Router.Route;
var Routes = Router.Routes;

// Layouts
var MainLayout = require('./layouts/MainLayout.jsx');
var AnonLayout = require('./layouts/AnonLayout.jsx');

// Pages
var LoginPage    = require('./pages/LoginPage.jsx');
var CommentsPage = require('./pages/CommentsPage.jsx');

var App = React.createClass({
    render() {
        var flux = this.props.flux;

        return(
            <Routes>
                <Route handler={AnonLayout} flux={flux}>
                    <Route name='login' handler={LoginPage} flux={flux} />
                </Route>

                <Route handler={MainLayout} flux={flux}>
                    <Route name='comments' handler={CommentsPage} flux={flux} />
                </Route>
            </Routes>
        );
    }
});

module.exports = App;