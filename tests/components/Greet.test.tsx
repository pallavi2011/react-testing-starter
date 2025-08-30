import { render, screen } from '@testing-library/react';
import Greet from '../../src/components/Greet';


describe('Greet', () => { 
    it('should render hello with name when name is provided', () => {
        render(<Greet name="Pallavi"/>);

        const headings = screen.getByText(/Hello Pallavi/i);
        expect(headings).toBeInTheDocument();
    });

    it('should render login button when name is not provided', () => {
        render(<Greet/>);

        const loginButton = screen.getByRole('button', { name: /login/i });
        expect(loginButton).toBeInTheDocument();

    })
 })