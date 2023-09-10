import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
// import ErrorLoader from './components/ErrorComponents/ErrorLoader';
import { INDEX } from './utilities/routeNames';
import { Home } from './utilities/lazy';
import "./assets/sass/main.scss"
import "./assets/sass/header.scss";
import "./assets/sass/profile.scss";
import "./assets/css/main.css"
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Route errorElement={<ErrorLoader />}>

      <Route index path={INDEX} element={<Home />} />
      // </Route>
    )
  );
  return (
    <React.Fragment>
      <RouterProvider router={router} />
      {/* <div style={{ color: 'white' }}>asdf</div> */}

    </React.Fragment>
  )
}

export default App
