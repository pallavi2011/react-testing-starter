import { render, screen } from '@testing-library/react';
import UserAccount from '../../src/components/UserAccount';
import { User } from '../../src/entities';

describe('', () => {
    
     it('should render name of user when user is provided', () => {
        const user:User = { id:1, name: "Pallavi", isAdmin: true };
        render(<UserAccount user={user}/>);

        
        expect(screen.getByText(user.name)).toBeInTheDocument();
        
    });

     it('should render edit button is user is an admin', () => {
        const user:User = { id:1, name: "Pallavi", isAdmin: true };
        render(<UserAccount user={user}/>);

        const editButton = screen.getByRole('button', { name: /Edit/i });
        expect(editButton).toBeInTheDocument();
    });

    it('should not render edit button if user is not an admin', () => {
        const adminUser = { id:1, name: "Pallavi", isAdmin: false };
        render(<UserAccount user={adminUser}/>);

        const editButton = screen.queryByRole('button');
        expect(editButton).not.toBeInTheDocument();
    });

})