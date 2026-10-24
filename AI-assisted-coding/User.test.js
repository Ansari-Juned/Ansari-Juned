import { render, screen } from '@testing-library/react';
import User from './User';

test('renders user name', () => {
  render(<User name="Jane Doe" />);
  const nameElement = screen.getByTextId('user-card-name');
  expect(nameElement).toHaveTextContent('Jane Doe');