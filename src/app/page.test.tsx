import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders the main section', () => {
    render(<Home />);
    const mainSection = screen.getByRole('main');
    expect(mainSection).toBeInTheDocument();
  });

  it('renders the Landing component', () => {
    render(<Home />);
    const landingComponent = screen.getByTestId('landing-section');
    expect(landingComponent).toBeInTheDocument();
  });
});
