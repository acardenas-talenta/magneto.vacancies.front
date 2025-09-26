import { Outlet, type RouteObject } from 'react-router-dom';
import CandidateManagementPage from '@app/candidate-management/page';

export const routes: RouteObject[] = [
  {
    path: '/stages',
    Component: Outlet,
    children: [
      {
        path: 'config',
        Component: CandidateManagementPage,
      },
    ],
  },
];
