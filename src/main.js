'use strict';
require('./assets');

var React = window.React = require('react');
var App   = require('./App.jsx');
var $     = require('jquery');

var serverActionCreators = require('./actions/serverActionCreators');

$(document).ready(function() {
    React.renderComponent(App({}), document.getElementById('content'));

    setTimeout(() => {
        console.log('LOADING COMMENTS');

        serverActionCreators.receiveAllComments([
            {
                id: 1232,
                text: "hello world",
                createdAt: 1408730495,
                status: 'PENDING'
            },

            {
                id: 12323,
                text: "hello world",
                createdAt: 1408730495,
                status: 'PENDING'
            }
        ]);
    },2000);
});

