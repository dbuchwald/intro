import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Glyphicon, Media } from 'react-bootstrap';

const Todo = ({ onClick, completed, header, description }) => (
    <ListGroupItem onClick={onClick}>
      <Media>
        <Media.Left align='middle'>
          <Glyphicon style={{color: completed ? '#6ed26e' : '#f27e7e'}} 
                     glyph={completed ? 'ok' : 'remove'}/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>{header}</Media.Heading>
          {description}
        </Media.Body>
      </Media>
    </ListGroupItem>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Todo