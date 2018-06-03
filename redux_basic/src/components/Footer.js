import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions/actions'
import { ButtonGroup } from 'react-bootstrap'

const Footer = () => (
  <div>
    Show:
    {' '}
    <ButtonGroup>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>
        All
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
        Active
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </ButtonGroup>
  </div>
)

export default Footer