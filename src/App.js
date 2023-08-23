import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { ROUTES } from './routes/ROUTES'
// import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const routes = createBrowserRouter(ROUTES)
const App = () => {


  return (
    <>
    <RouterProvider router={routes}/>
    </> 

  )
}

export default App



