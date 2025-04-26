import { todosReduce,
         visibilityFilterReduce} from './reducers';
import { addTodo, 
         toggleTodo, 
         setVisibilityFilter, 
         VisibilityFilters } from "../actions/actions.js";

test('visibilityFilterReduce should return the same state for undefined action', () => {
  const initialState = null;
  const action = undefined;

  const resultingState = visibilityFilterReduce(initialState, action);

  expect(resultingState).toBe(initialState);
});

test('visibilityFilterReduce should return different state for correct action', () => {
  const initialState = VisibilityFilters.SHOW_ALL;
  const action = setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED);
  
  const resultingState = visibilityFilterReduce(initialState, action);

  expect(resultingState).not.toBe(initialState);
  expect(resultingState).toEqual(VisibilityFilters.SHOW_COMPLETED);
});

test('visibilityFilterReduce should return SHOW_ALL as default initial state', () => {
  const initialState = undefined;
  const action = undefined;
  
  const resultingState = visibilityFilterReduce(initialState, action);

  expect(resultingState).toEqual(VisibilityFilters.SHOW_ALL);
});

test('todosReduce should return the same state for undefined action', () => {
  const initialState = [];
  const action = undefined;

  const resultingState = todosReduce(initialState, action);

  expect(resultingState).toBe(initialState);
});

test('todosReduce should return different state for correct action', () => {
  const initialState = [];
  const action = toggleTodo(1);

  const resultingState = todosReduce(initialState, action);

  expect(resultingState).not.toBe(initialState);
  expect(resultingState).toEqual(initialState);
});

test('todosReduce should return empty list as default initial state', () => {
  const initialState = undefined;
  const action = undefined;

  const resultingState = todosReduce(initialState, action);

  expect(resultingState).toEqual([]);
});

test('todosReduce should handle toggle action correctly', () => {
  const initialState = [ {header: 'sample header', description: 'sample description', completed: false} ];
  const action = toggleTodo(0);
  const expectedState = [ {header: 'sample header', description: 'sample description', completed: true} ];

  const resultingState = todosReduce(initialState, action);
  
  expect(resultingState).toEqual(expectedState);
});

test('todosReduce should handle toggle action correctly for many items', () => {
  const initialState = [ {header: 'sample header', description: 'sample description', completed: false}, 
                         {header: 'sample header', description: 'sample description', completed: false} ];
  const action = toggleTodo(1);
  const expectedState = [ {header: 'sample header', description: 'sample description', completed: false},
                          {header: 'sample header', description: 'sample description', completed: true} ];

  const resultingState = todosReduce(initialState, action);
  
  expect(resultingState).toEqual(expectedState);
});

test('todosReduce should handle add action correctly', () => {
  const initialState = [];
  const action = addTodo('sample header', 'sample description');
  const expectedState = [ {header: 'sample header', description: 'sample description', completed: false} ];

  const resultingState = todosReduce(initialState, action);
  
  expect(resultingState).toEqual(expectedState);
});