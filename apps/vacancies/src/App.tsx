import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/base.module.scss';
import { routes } from './router/routes';

export const App = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};
