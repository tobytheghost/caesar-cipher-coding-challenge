import { render, screen } from '@testing-library/react';
import { App } from './app';

describe('App', () => {
  it('should work as expected', () => {
    const { container } = render(<App />);

    const element = screen.getByText('Caesar cipher coding challenge');

    expect(element).toBeDefined();
  });
});
