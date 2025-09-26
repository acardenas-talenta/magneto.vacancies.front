import { Outlet, type RouteObject } from 'react-router-dom';
import VacantListPage from '@app/vacancies-list/page';

export const routes: RouteObject[] = [
  {
    path: '/vacants',
    Component: Outlet,
    children: [
      {
        path: 'search',
        Component: VacantListPage,
      },
    ],
  },
];
