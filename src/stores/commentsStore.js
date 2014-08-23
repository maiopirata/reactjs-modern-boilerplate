'use strict';

var BaseStore = require('./BaseStore');

class CommentsStore extends BaseStore {
    constructor() {
        super();
        this.comments = [];
    }

    getComments() {
        return this.comments;
    }

    ACCEPT_COMMENT() {

    }

    REJECT_COMMENT() {

    }

    RECEIVE_ALL_COMMENTS(action) {
        this.comments = action.comments;
        this.emitChange();
    }
}


module.exports = new CommentsStore();