import * as React from 'react'
import { render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Landing } from '../../pages';


describe('Landing component', () => {
    it('renders landing page correctly', async() => {
      render(
        <MemoryRouter>
          <Landing />
        </MemoryRouter>
      );
  
      // Check if the logo is rendered
      const logoElement = screen.getByRole('img', { name: 'real estate logo' });
      expect(logoElement).toBeInTheDocument();

      const imageAltElement = screen.getByAltText(/real estate logo/i);
      expect(imageAltElement).toBeInTheDocument();
      
      // Check if the heading is rendered
      const spanElement = screen.getByText(/place for living/i);
      expect(spanElement).toBeInTheDocument();
  
      // Check if the text content is rendered
      const textElement = screen.getByText(/Lorem, ipsum dolor sit amet consectetur adipisicing elit./i);
      expect(textElement).toBeInTheDocument();
  
      // Check if the Register button is rendered
      const registerButtonElement = screen.getByRole('link', { name: /Register/i });
      expect(registerButtonElement).toBeInTheDocument();
      expect(registerButtonElement).toHaveAttribute('href', '/register');
    //   fireEvent.click(registerButtonElement);
      
    //Check if the Login /Demo User button is rendered
      const loginButtonElement = screen.getByRole('link', { name: /Login \/Demo User/i });
      expect(loginButtonElement).toBeInTheDocument();
      expect(loginButtonElement).toHaveAttribute('href', '/login');
      // Check if the image is rendered
      const imageElement = screen.getByAltText(/Job main pic/i);
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveStyle('display: none;');
    }); 
});

