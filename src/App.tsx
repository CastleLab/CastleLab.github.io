import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { Awards } from './pages/Awards';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Projects } from './pages/Projects';
import { Publication } from './pages/Publication';
import { People } from './pages/People';
import { News } from './pages/News';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/news',
    element: <News />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/publication',
    element: <Publication />,
  },
  {
    path: '/people',
    element: <People />,
  },
  {
    path: '/awards',
    element: <Awards />,
  },
]);

function App(): React.ReactElement {
  return (
    <React.StrictMode>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </React.StrictMode>
  );
}

export default App;
