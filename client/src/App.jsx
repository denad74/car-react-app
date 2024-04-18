import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HomeLayout, About, Contact, AllCar, Dashboard, Error, Landing, Register, Login } from "./pages";

const router = createBrowserRouter([
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
      },
      {
      path: 'register',
      element: <Register/>
      },
      {
      path: 'login',
      element: <Login/>
      },
    ]
  },
  
])
const App = () => {

  return <RouterProvider router={router}/>
}

export default App
