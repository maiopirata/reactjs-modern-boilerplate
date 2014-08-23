/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var Row           = require('react-bootstrap/Row');
var Col           = require('react-bootstrap/Col');
var Input         = require('react-bootstrap/Input');
var Button        = require('react-bootstrap/Button');
var ButtonToolbar = require('react-bootstrap/ButtonToolbar');
var Jumbotron     = require('react-bootstrap/Jumbotron');

var LoginPage = React.createClass({
    render() {
        return (
            <div className='LoginPage'>
                <Row />
                <Row>
                    <Col xs={12} md={8} mdOffset={2} >
                        <Jumbotron>
                            <h2> Enter your login and password </h2>

                            <form className='form-horizontal'>
                                <Input type='text'     label='Login'    />
                                <Input type='password' label='Password' />
                                <ButtonToolbar className='pull-right'>
                                    <Button  bsStyle='primary'> Submit </Button>
                                </ButtonToolbar>
                            </form>
                        </Jumbotron>
                    </Col>
                </Row>
            </div>
        );
    }
});

module.exports = LoginPage;