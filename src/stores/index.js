'use strict';

var CommentsStore = require('./CommentsStore');

module.exports = {
    comments: new CommentsStore()
};