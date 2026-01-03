// App.jsx
import { Container, Button } from '@mui/material';
import Header from './components/headerComponents/AppBar';
import Playground from './Playground'
import { createBrowserRouter, RouterProvider } from 'react-router';
import UserCart from './components/UserCart/UserCart.jsx';
import Home from './components/HomeComponents/Home.jsx';
import About from './components/AboutComponent/About.jsx'
import Signin from "./components/AccountComponent/Signin.jsx"
import Signup from './components/AccountComponent/Signup.jsx';
import Error from './components/ErrorComponent/Error.jsx';
const router = createBrowserRouter([
  {path:"/shop", element:<Playground />, ErrorBoundary:<Error />},
  {path:"/user-cart", element: <UserCart />, ErrorBoundary:<Error />},
  {path:"/", element: <Home/>, ErrorBoundary:<Error />},
  {path:"/about", element: <About/>, ErrorBoundary:<Error />},
  {path:"/signin", element: <Signin />, ErrorBoundary:<Error />},
  {path:"/signup", element: <Signup />, ErrorBoundary:<Error />}
])
function App() {
  return <RouterProvider router={router} />
}

export default App;