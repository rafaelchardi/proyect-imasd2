import { isAuthenticatedGuard, isNotAuthenticatedGuard } from '@imasd/libraryImasd';


export const appRoutes = [

    {
      path: 'auth',
      canActivate: [ isNotAuthenticatedGuard ],
      loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
    },
   {
      path: 'dashboard',
      canActivate: [ isAuthenticatedGuard ],
      loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule ),
    },
    {
      path: 'clien',
       canActivate: [ isAuthenticatedGuard ],
      loadChildren: () => import('./ventas/clien.module').then( m => m.ClientModule ),
    },
    {
      path: '**',
      redirectTo: 'auth'
    },
  
  
  ];
