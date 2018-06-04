import React from 'react'
import PropTypes from 'prop-types'
import { NavItem } from 'react-bootstrap'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <NavItem active>{children}</NavItem>
  }

  return (
    <NavItem
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </NavItem>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link