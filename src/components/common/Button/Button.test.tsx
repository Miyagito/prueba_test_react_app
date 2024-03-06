import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders button and responds to click event', () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>Realizar prueba</Button>);
    const buttonElement = screen.getByText(/realizar prueba/i);
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
