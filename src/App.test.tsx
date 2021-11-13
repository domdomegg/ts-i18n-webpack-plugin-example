import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// We can mock our translations if we wanted to
// import t from './i18n/browser'

test('renders nested works text', () => {
  // We can mock our translations if we wanted to
  // t.nested.works = jest.fn().mockReturnValue('Nested works')

  render(<App />);
  const nestedWorksMessage = screen.getByText(/nested works/i);
  expect(nestedWorksMessage).toBeInTheDocument();
});
