import { render, screen } from '@testing-library/react';
import MyTodoListApp from '../src/components/todolist/MyTodoListApp';

test('renders learn react link', () => {
  render(<MyTodoListApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
