import { RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello from homepage of car app</h1>
  },
  {
    path: '/about',
    element: <h1>Hello from about page</h1>
  },
  {
    path: '/our-cars',
    element: <h1>Hello from cars page</h1>
  },
  {
    path: '/contact',
    element: <h1>Hello from contact page</h1>
  }
])
const App = () => {

  return <RouterProvider router={router}/>
}

export default App
