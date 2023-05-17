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
      path: 'client',
       canActivate: [ isAuthenticatedGuard ],
      loadChildren: () => import('./ventas/client.module').then( m => m.ClientModule ),
    },
    {
      path: '**',
      redirectTo: 'auth'
    },
  
  
  ];
