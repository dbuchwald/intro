import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Glyphicon } from 'react-bootstrap';

const Todo = ({ onClick, completed, text }) => (
  <ListGroupItem onClick={onClick}>
    <Glyphicon style={{color: completed ? '#6ed26e' : '#f27e7e'}} 
               glyph={completed ? 'ok' : 'remove'}/>
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