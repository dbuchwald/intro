import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Glyphicon } from 'react-bootstrap';

const Todo = ({ onClick, completed, text }) => (
  <ListGroupItem onClick={onClick}>
    <Glyphicon glyph={completed ? 'ok' : 'remove'}/>
    &ensp;
    {text}
  </ListGroupItem>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo