import { addTodo, 
         toggleTodo, 
         setVisibilityFilter, 
         VisibilityFilters,
         ADD_TODO, 
         TOGGLE_TODO, 
         SET_VISIBILITY_FILTER } from "./actions.js";

test('addTodo action should return valid Redux action', () => {
  const action = addTodo();

  expect(action).toHaveProperty('type');
});

test('addTodo action should return ADD_TODO action', () => {
  const action = addTodo();

  expect(action.type).toBe(ADD_TODO);
});

test('addTodo action should have correct text', () => {
  const todoText = "Sample TODO";
  const action = addTodo(todoText);

  expect(action.text).toBe(todoText);
});

test('toggleTodo action should return valid Redux action', () => {
  const action = toggleTodo();

  expect(action).toHaveProperty('type');
});

test('toggleTodo should return TOGGLE_TODO action', () => {
  const action = toggleTodo();

  expect(action.type).toBe(TOGGLE_TODO);
});

test('toggleTodo action shold have correct index', () => {
  const todoIndex = 1;
  const action = toggleTodo(todoIndex);

  expect(action.index).toBe(todoIndex);
});

test('setVisibilityFilter action should return valid Redux action', () => {
  const action = setVisibilityFilter();

  expect(action).toHaveProperty('type');
});

test('setVisibilityFilter should return SET_VISIBILITY_FILTER action', () => {
  const action = setVisibilityFilter();

  expect(action.type).toBe(SET_VISIBILITY_FILTER);
});

test('setVisibilityFilter should return correct filter', () => {
  const filter = VisibilityFilters.SHOW_ALL;
  const action = setVisibilityFilter(filter);

  expect(action.filter).toBe(filter);
});