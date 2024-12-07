import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders the main heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      name: /Hi! I'm Travis Allen/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<Home />);
    const description = screen.getByText(
      /I'm a backend and full stack software engineer/i
    );
    expect(description).toBeInTheDocument();
  });

  it('renders the footer', () => {
    render(<Home />);
    const footer = screen.getByText(/Built with ❤️ by Travis Allen/i);
    expect(footer).toBeInTheDocument();
  });
});
