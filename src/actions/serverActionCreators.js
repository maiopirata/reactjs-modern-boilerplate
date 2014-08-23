'use strict';

var dispatcher = require('../dispatcher');
var constants  = require('./constants');

module.exports = {
    receiveAllComments(comments) {
        dispatcher.dispatch({
            type: constants.RECEIVE_ALL_COMMENTS,
            comments: comments
        });
    }
};
