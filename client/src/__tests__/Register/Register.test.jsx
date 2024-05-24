import * as React from 'react'
import { render, screen,fireEvent} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {  Register } from '../../pages';


describe('Register component', () => {
    it('renders register page correctly', async() => {
      render(
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      );
  
      // Check if the logo is rendered
      const logoElement = screen.getByRole('img', { name: 'real estate logo' });
      expect(logoElement).toBeInTheDocument();

      // Check if the heading is rendered
      const headingElement = screen.getByRole('heading',{name: 'Register app'});
      expect(headingElement).toBeInTheDocument();

      // Check if the input name is rendered 
      const nameInputTextBox = screen.getByRole('textbox', {
        name: "name",
      });
      expect(nameInputTextBox).toBeInTheDocument();
      expect(nameInputTextBox).toHaveAttribute('required');
      expect(nameInputTextBox).toHaveValue('deno');
      fireEvent.change(nameInputTextBox, { target: { value: 'denoRam' } });
      expect(nameInputTextBox).toHaveValue('denoRam');

      // Check if the input last name is rendered 
      const lastNameInputTextBox = screen.getByRole('textbox', {
        name: "last name",
      });
      expect(lastNameInputTextBox).toBeInTheDocument();
      expect(lastNameInputTextBox).toHaveAttribute('required');
      expect(lastNameInputTextBox).toHaveValue('ram');
      fireEvent.change(lastNameInputTextBox, { target: { value: 'denoRam' } });
      expect(lastNameInputTextBox).toHaveValue('denoRam');

      // Check if the input company name is rendered 
      const companyNameInputTextBox = screen.getByRole('textbox', {
        name: "companyName",
      });
      expect(companyNameInputTextBox).toBeInTheDocument();
      expect(companyNameInputTextBox).toHaveValue('asena');
      fireEvent.change(companyNameInputTextBox, { target: { value: 'sena' } });
      expect(companyNameInputTextBox).toHaveValue('sena');

      // Check if the input location name is rendered 
      const locationInputTextBox = screen.getByRole('textbox', {
        name: "location",
      });
      expect(locationInputTextBox).toBeInTheDocument();
      expect(locationInputTextBox).toHaveAttribute('required');
      expect(locationInputTextBox).toHaveValue('sarajevo');
      fireEvent.change(locationInputTextBox, { target: { value: 'mostar' } });
      expect(locationInputTextBox).toHaveValue('mostar');

      // Check if the input street name is rendered 
      const streetInputTextBox = screen.getByRole('textbox', {
        name: "street",
      });
      expect(streetInputTextBox).toBeInTheDocument();
      expect(streetInputTextBox).toHaveAttribute('required');
      expect(streetInputTextBox).toHaveValue('Topal Osman 5');
      fireEvent.change(streetInputTextBox, { target: { value: 'Titova 5' } });
      expect(streetInputTextBox).toHaveValue('Titova 5');

      // Check if the input country name is rendered 
      const countryInputTextBox = screen.getByRole('textbox', {
        name: "country",
      });
      expect(countryInputTextBox).toBeInTheDocument();
      expect(countryInputTextBox).toHaveAttribute('required');
      expect(countryInputTextBox).toHaveValue('BiH');
      fireEvent.change(countryInputTextBox, { target: { value: 'Austrija' } });
      expect(countryInputTextBox).toHaveValue('Austrija');


      // Check if the input email name is rendered 
      const emailInputTextBox = screen.getByRole('textbox', {
        name: "email",
      });
      expect(emailInputTextBox).toBeInTheDocument()
      expect(emailInputTextBox).toHaveAttribute('type', 'email');
      expect(emailInputTextBox).toHaveAttribute('required');
      expect(emailInputTextBox).toHaveValue('deno@deno.com');
      fireEvent.change(emailInputTextBox, { target: { value: 'ram@ram.com' } });
      expect(emailInputTextBox).toHaveValue('ram@ram.com');

      // Check if the input phone name is rendered 
      const phoneInputTextBox = screen.getByRole('textbox', {
        name: "phone",
      });
      expect(phoneInputTextBox).toBeInTheDocument();
      expect(phoneInputTextBox).toHaveAttribute('type', 'tel');
      expect(phoneInputTextBox).toHaveAttribute('required');
      expect(phoneInputTextBox).toHaveValue('123 123 123 123');
      fireEvent.change(phoneInputTextBox, { target: { value: '23 123 123 123' } });
      expect(phoneInputTextBox).toHaveValue('23 123 123 123');

       // Check if the input password is rendered 
      const passwordInput = screen.getByLabelText('password');
      expect(passwordInput).toBeInTheDocument();
      expect(passwordInput).toHaveValue('deno1234');
      fireEvent.change(passwordInput, { target: { value: 'deno123' } });

      // Check if the input password is rendered 
      const confirmPasswordInput = screen.getByLabelText('confirm password');
      expect(confirmPasswordInput).toBeInTheDocument();
      expect(confirmPasswordInput).toHaveValue('deno1234');
      fireEvent.change(confirmPasswordInput, { target: { value: 'deno123' } });

       // Ensure both inputs have the correct values
    expect(passwordInput).toHaveValue('deno123');
    expect(confirmPasswordInput).toHaveValue('deno123');

    // Confirm password match
    // expect(screen.queryByText('Passwords match')).toBeInTheDocument();

      // Check if the submit is rendered 
      const submitButton = screen.getByRole('button', {
        name: "submit",
      });
      expect(submitButton).toBeInTheDocument();

      // Check if the user is member is rendered 
      const textUserMember = screen.getByText('Already a member?'
      );
      expect(textUserMember).toBeInTheDocument();

      // Check if the login button is rendered 
      const loginButton = screen.getByRole('link', {
        name: "Login",
      });
      expect(loginButton).toBeInTheDocument();
      expect(loginButton).toHaveAttribute('href', '/login');

     
      
    }); 
});