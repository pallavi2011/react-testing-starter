import { render, screen } from '@testing-library/react';
import TermsAndConditions from '../../src/components/TermsAndConditions';
import userEvent from '@testing-library/user-event';

describe('Terms and conditions', () => {
    const renderComponent = () => {
        render(<TermsAndConditions/>)

        return{
            heading: screen.getByRole('heading'),
            checkbox :screen.getByRole('checkbox'),
            button: screen.getByRole('button')
        }
    }

    it('should render with correct text', () => {
        const {heading, checkbox, button} = renderComponent();

        expect(heading).toHaveTextContent('Terms & Conditions');

        expect(checkbox).not.toBeChecked();

        expect(button).toHaveTextContent(/submit/i);
        expect(button).toBeDisabled();



        
    });

    it('should enable the button when chekcbox is checked', async() => {
       const {checkbox, button} = renderComponent();
       
       
        const user = userEvent.setup();
        await user.click(checkbox);

        expect(button).toBeEnabled();
        
    })
})