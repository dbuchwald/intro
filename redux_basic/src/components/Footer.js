import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions/actions'
import { Nav, Navbar } from 'react-bootstrap'

const Footer = () => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>Filter ToDos</Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
          All
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
          Active
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterLink>
      </Nav>
    </Navbar>
  </div>
)

export default Footer