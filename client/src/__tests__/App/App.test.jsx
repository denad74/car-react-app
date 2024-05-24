import { render, screen, waitFor, act  } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import App from "../../App";
import { router } from "../../__mooks__/router.mooks";
// Mocking Request object
global.Request = jest.fn();

it('renders landing page by default', async () => {
   render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );

  const logoElement = screen.getByRole('img', { name: 'Car logo' });
  await expect(logoElement).toBeInTheDocument();
});

it('renders about page when navigating to /about', async() => {
  render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );

  // Simulate navigation to about page
  act(() => {
  router.navigate('/about');
  });
  // Assert that about page content is rendered
  await waitFor(() => {
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});

it('renders all car page when navigating to /all-car', async() => {
  render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );

  // Simulate navigation to about page
  act(() => {
    router.navigate('/all-cars');
    });
    // Assert that All car page content is rendered
    await waitFor(() => {
      expect(screen.getByText('AllCar')).toBeInTheDocument();
    });
});

it('renders contact page when navigating to /contact', async() => {
  render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );

  // Simulate navigation to about page
  act(() => {
  router.navigate('/contact');
  });
  // Assert that about page content is rendered
  await waitFor(() => {
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});

it('renders dashboard page when navigating to /dashboard', async() => {
  render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );

  act(() => {
  router.navigate('/dashboard');
  });

  await waitFor(() => {
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
});

it('renders error page when navigating to /lslll', async() => {
  render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
  act(() => {
  router.navigate('/lslll');
  });

  await waitFor(() => {
    expect(screen.getByText("We can't seem to find the page you are looking for")).toBeInTheDocument();
  });
});

