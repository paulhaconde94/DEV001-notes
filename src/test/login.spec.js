import App from '../App';
import Login from '../componentes/Login';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { loginWithGoogle } from '../firebase/firebase-init';

it("login", () => {
    render(<BrowserRouter>
        <App />
    </BrowserRouter>);
})

/*jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
  }));
*/
jest.mock('../firebase/firebase-init', () => ({
    loginWithGoogle: jest.fn(),
}));

describe('Login component', () => {

    it('calls the signInWithGoogle function when the button is clicked', async() => {
        loginWithGoogle.mockResolvedValue({
            user: {
                displayName: 'Test User',
                email: 'test@example.com',
            },
        });
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );
        //act(() => {fireEvent.click(screen.getByRole('button'))})
        await waitFor (()=>{ 
            fireEvent.click(screen.getByRole('button'))
            expect(loginWithGoogle).toHaveBeenCalled();
        }) 

    });
});
