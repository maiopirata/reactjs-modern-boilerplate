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
        return(
            <Routes>
                <Route handler={AnonLayout}>
                    <Route name='login' handler={LoginPage} />
                </Route>

                <Route handler={MainLayout}>
                    <Route name='comments' handler={CommentsPage} />
                </Route>
            </Routes>
        );
    }
});

module.exports = App;