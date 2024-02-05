import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Example } from './Example';

describe('Example', () => {
  it('renders children', () => {
    render(<Example>Hello world</Example>);
    expect(screen.getByTestId('example')).toBeInTheDocument();
    expect(screen.getByTestId('example')).toHaveTextContent('Hello world');
  });
});
