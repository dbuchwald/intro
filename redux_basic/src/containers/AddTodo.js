import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'

let AddTodo = ({ dispatch }) => {
  let inputHeader
  let inputDescription

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!inputHeader.value.trim()) {
            return
          }
          dispatch(addTodo(inputHeader.value, inputDescription.value))
          inputHeader.value = ''
          inputDescription.value = ''
        }}
      >
        <input
          ref={node => {
            inputHeader = node
          }}
        />
        <input
          ref={node => {
            inputDescription = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
}

AddTodo = connect()(AddTodo)

export default AddTodo