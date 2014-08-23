'use strict';

var EventEmitter = require('events').EventEmitter;
var dispatcher   = require('../dispatcher');

var CHANGE_EVENT = 'change';

class BaseStore extends EventEmitter {
    constructor() {
        this.dispatcher = dispatcher;
        this.dispatchToken = dispatcher.register((action) => {
            var method = action.type;

            if ( this[method] ) {
                this[method](action);
            }
        });
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(cb) {
        this.on(CHANGE_EVENT, cb);
    }

    removeChangeListener(cb) {
        this.removeListener(CHANGE_EVENT, cb);
    }
}

module.exports = BaseStore;