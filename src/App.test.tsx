import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app initial', () => {
  render(<App />);
  const text = screen.getByText(/Gestor/i);
  expect(text).toBeInTheDocument();
});
