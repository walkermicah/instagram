import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      {/* TO DO: login path */}
      {/* TO DO: home redirects to login if signed out */}
      {/* TO DO: login redirects to home if signed in */}
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
