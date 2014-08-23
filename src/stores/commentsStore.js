'use strict';

var Fluxxor   = require('fluxxor');
var constants = require('../constants');

var CommentsStore = Fluxxor.createStore({
    initialize() {
        this.comments = [];

        this.bindActions(
            constants.ACCEPT_COMMENT,       this.handleAcceptComment,
            constants.REJECT_COMMENT,       this.handleRejectComment,
            constants.RECEIVE_ALL_COMMENTS, this.handleReceiveAllComments
        );
    },

    getComments() {
        return this.comments;
    },

    handleAcceptComment() {

    },

    handleRejectComment() {

    },

    handleReceiveAllComments(comments) {
        this.comments = comments;
        this.emit('change');
    }
});


module.exports = CommentsStore;