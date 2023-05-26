import { Routes } from '@angular/router';
import { contentRoles, isAuthenticatedGuard, isNotAuthenticatedGuard } from '@imasd/libraryImasd';


export const appRoutes :Routes = [


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
      path: 'sales',
      canActivate: [ isAuthenticatedGuard ,contentRoles ],
      canActivateChild:[contentRoles],
      loadChildren: () => import('./ventas/ventas.module').then( m => m.VentasModule ),
    },
    {
      path: '**',
      redirectTo: 'auth'
    },
  
  
  ];
