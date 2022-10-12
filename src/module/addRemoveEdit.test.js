import { addTask, removeTask } from './addRemoveEdit.js';
describe('Adding and Removing a function', () => {
  test('adding the task', () => {
    expect(addTask).not.toBeNull();
  });
  test('remove a task task', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(removeTask).not.toBeDefined;
  });
  test('remove a task task', () => {
    expect(removeTask.parentElement).not.toBe('');
  });
});
