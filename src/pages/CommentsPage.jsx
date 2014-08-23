/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var commentsStore = require('../stores/commentsStore');

var Row           = require('react-bootstrap/Row');
var Col           = require('react-bootstrap/Col');
var CommentsList  = require('../components/CommentsList.jsx');

var CommentsPage = React.createClass({
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

    getInitialState() {
        return this.getStateFromStores();
    },

    componentDidMount() {
        commentsStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        commentsStore.removeChangeListener(this._onChange);
    },

    _onChange() {
        this.setState(this.getStateFromStores());
    },

    getStateFromStores() {
        return {
            comments: commentsStore.getComments()
        };
    }
});

module.exports = CommentsPage;