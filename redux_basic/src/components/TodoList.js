import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { ListGroup, Panel } from 'react-bootstrap'

const TodoList = ({ todos, onTodoClick }) => (
  <Panel>
    <Panel.Heading>
      <Panel.Title>List of ToDos</Panel.Title>
    </Panel.Heading>
    <ListGroup>
      {todos.map((todo, index) => (
        <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
      ))}
    </ListGroup>
  </Panel>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      header: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList