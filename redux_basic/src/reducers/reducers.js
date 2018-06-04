import { combineReducers } from 'redux';

import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions/actions';

export const visibilityFilterReduce = (state = VisibilityFilters.SHOW_ALL, 
                                       action = {type: undefined}) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export const todosReduce = (state = [], 
                            action = {type: undefined}) => {
  switch (action.type) {
    case ADD_TODO :
      return [ 
               ...state, 
               {
                 header: action.header,
                 description: action.description,
                 completed: false
               }
             ]; 
    case TOGGLE_TODO :
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, 
                               {completed: !todo.completed})
        }
        return todo;
      });
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos: todosReduce,
  visibilityFilter: visibilityFilterReduce
});

export default todoApp;