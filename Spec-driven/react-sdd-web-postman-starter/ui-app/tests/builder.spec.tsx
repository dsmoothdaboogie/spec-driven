import React from 'react';
import { render, screen } from '@testing-library/react';
import Builder from '../src/ui/Builder';

describe('Builder', () => {
  it('renders inputs', () => {
    render(<Builder />);
    expect(screen.getByTestId('url-input')).toBeInTheDocument();
    expect(screen.getByTestId('method-select')).toBeInTheDocument();
  });
});
