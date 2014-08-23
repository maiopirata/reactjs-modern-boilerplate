/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var FluxMixin = require('fluxxor').FluxMixin(React);
var StoreWatchMixin = require('fluxxor').StoreWatchMixin;

var Row           = require('react-bootstrap/Row');
var Col           = require('react-bootstrap/Col');
var CommentsList  = require('../components/CommentsList.jsx');

var CommentsPage = React.createClass({
    mixins: [ FluxMixin, StoreWatchMixin('comments') ],
    render() {
        return (
            <div className='CommentsPage'>
                <Row />
                <Row>
                    <Col xs={6}>
                        <CommentsList comments={this.state.comments} />
                    </Col>

                    <Col xs={6}>

                    </Col>
                </Row>
            </div>
        );
    },

    getStateFromFlux() {
        var flux = this.getFlux();

        return {
            comments: flux.store('comments').getComments()
        };
    }
});

module.exports = CommentsPage;