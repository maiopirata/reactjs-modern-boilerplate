/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Comment = require('./Comment.jsx');

var CommentsList = React.createClass({
    propTypes: {
        comments: React.PropTypes.array.isRequired
    },

    render() {
        var comments = this.props.comments;

        return (
            <div>
                { comments.map(data => <Comment data={data} />) }
            </div>
        );
    }

});

module.exports = CommentsList;