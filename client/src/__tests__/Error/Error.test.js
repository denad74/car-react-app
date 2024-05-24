import * as React from 'react'
import { render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Error } from '../../pages';


describe('Error component', () => {
    it('renders error page correctly', async() => {
      render(
        <MemoryRouter>
          <Error />
        </MemoryRouter>
      );
  
      // Check if the Error text is rendered
      const errorText = screen.getByText('Error' );
      expect(errorText).toBeInTheDocument();
    });
});