import { createBrowserRouter } from "react-router-dom";
import { About, AllCar, Contact, Dashboard, Error, HomeLayout, Landing } from "../pages";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout/>,
      errorElement: <Error/>,
      children:[
        {
          index:true,
          element: <Landing/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/all-cars',
          element: <AllCar/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/dashboard',
          element: <Dashboard/>
        }
      ]
    },
  ]);