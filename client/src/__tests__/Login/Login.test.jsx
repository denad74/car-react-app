import * as React from 'react'
import { render, screen,fireEvent} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {  Login } from '../../pages';


describe('Login component', () => {
    it('renders register page correctly', async() => {
      render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      );
  
      // Check if the logo is rendered
      const logoElement = screen.getByRole('img', { name: 'real estate logo' });
      expect(logoElement).toBeInTheDocument();

      // Check if the heading is rendered
      const headingElement = screen.getByRole('heading',{name: 'login'});
      expect(headingElement).toBeInTheDocument();

      // Check if the email name is rendered 
      const emailInputTextBox = screen.getByRole('textbox', {
        name: "email",
      });
      expect(emailInputTextBox).toBeInTheDocument()
      expect(emailInputTextBox).toHaveAttribute('type', 'email');
      expect(emailInputTextBox).toHaveAttribute('required');
      expect(emailInputTextBox).toHaveValue('deno@deno.com');
      fireEvent.change(emailInputTextBox, { target: { value: 'ram@ram.com' } });
      expect(emailInputTextBox).toHaveValue('ram@ram.com');

       // Check if the input password is rendered 
      const passwordInput = screen.getByLabelText('password');
      expect(passwordInput).toBeInTheDocument();
      expect(passwordInput).toHaveValue('deno1234');
      fireEvent.change(passwordInput, { target: { value: 'deno123' } });

    
      // Ensure both inputs have the correct values
      expect(passwordInput).toHaveValue('deno123');


      // Check if the submit button is rendered 
      const submitButton = screen.getByRole('button', {
        name: "submit",
      });
      expect(submitButton).toBeInTheDocument();

      // Check if the user is member is rendered 
      const textUserMember = screen.getByText('Not a member yet?'
      );
      expect(textUserMember).toBeInTheDocument();

      // Check if the register button is rendered 
      const loginButton = screen.getByRole('link', {
        name: "Register",
      });
      expect(loginButton).toBeInTheDocument();
      expect(loginButton).toHaveAttribute('href', '/register');

     
      
    }); 
});