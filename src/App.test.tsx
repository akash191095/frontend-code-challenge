import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './pages/Dashboard';

test('renders dashboard', async () => {
  const username = 'akash agarwal';
  const { findByText } = render(<Dashboard username={username} />);
  const greeting = await findByText(/akash,/i);
  const heading = await findByText(/What do you want to do today?/i);
  expect(greeting).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
});
