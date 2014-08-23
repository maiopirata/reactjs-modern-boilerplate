'use strict';
require('./assets');

var React = window.React = require('react');
var App   = require('./App.jsx');
var $     = require('jquery');
var Fluxxor = require('fluxxor');

$(document).ready(function() {
    var flux = new Fluxxor.Flux(require('./stores'), require('./actions'));

    React.renderComponent(App({flux: flux}), document.getElementById('content'));

    setTimeout(() => {
        flux.actions.receiveAllComments([
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

