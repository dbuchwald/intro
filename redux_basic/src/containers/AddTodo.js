import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'
import { Col, Form, FormGroup, ControlLabel, FormControl, Button, Panel } from 'react-bootstrap'

let AddTodo = ({ dispatch }) => {
  let inputHeader
  let inputDescription

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
              if (!inputHeader.value.trim()) {
                return
              }
              dispatch(addTodo(inputHeader.value, inputDescription.value))
              inputHeader.value = ''
              inputDescription.value = ''
            }}>
            <FormGroup controlId='todo'>
              <Col componentClass={ControlLabel} sm={2}>
                ToDo
              </Col>
              <Col sm={9}>
                <FormControl type='text' placeholder='todo'
                  inputRef={node => {
                            inputHeader = node
                          }}
                />
              </Col>
            </FormGroup>
            <FormGroup controlId='description'>
              <Col componentClass={ControlLabel} sm={2}>
                Description
              </Col>
              <Col sm={9}>
                <FormControl type='text' placeholder='description'
                  inputRef={node => {
                            inputDescription = node
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