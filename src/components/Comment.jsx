/**
 * @jsx React.DOM
 */
'use strict';
var React = require('react');

var moment = require('moment');

var Comment = React.createClass({
    propTypes: {
        data: React.PropTypes.object.isRequired
    },

    render() {
        var data = this.props.data;

        return (
            <div>
                Text: {data.text} <br />
                Time: {moment.unix(data.createdAt).fromNow()}
            </div>
        );
    }

});

module.exports = Comment;