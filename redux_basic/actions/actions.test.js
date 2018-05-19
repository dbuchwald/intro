import { addTodo, ADD_TODO } from "./actions.js";

test('addTodo action should return valid Redux action', () => {
  const action = addTodo(undefined);

  expect(action).toHaveProperty('type');
})

test('addTodo action should return ADD_TODO action', () => {
  const action = addTodo(undefined);

  expect(action.type).toBe(ADD_TODO);
});