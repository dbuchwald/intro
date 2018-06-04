import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'
import { Col, Form, FormGroup, ControlLabel, FormControl, Button, Panel } from 'react-bootstrap'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <Panel>
        <Panel.Heading>
          <Panel.Title>Add new ToDo</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Form horizontal 
            onSubmit={e => {
              e.preventDefault()
              if (!input.value.trim()) {
                return
              }
              dispatch(addTodo(input.value))
              input.value = ''
            }}>
            <FormGroup controlId='todo'>
              <Col componentClass={ControlLabel} sm={2}>
                ToDo
              </Col>
              <Col sm={9}>
                <FormControl type='text' placeholder='todo'
                  inputRef={node => {
                            input = node
                          }}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={9}>
                <Button type='submit'>Add Todo</Button>
              </Col>
            </FormGroup>

          </Form>
        </Panel.Body>
      </Panel>
    </div>
  )
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
}

AddTodo = connect()(AddTodo)

export default AddTodo