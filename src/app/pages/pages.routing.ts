import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [
{
    path: 'dashboard',
    component: PagesComponent,
    loadChildren: () => import('./child-routes.routing').then( m=>m.ChildRoutesModule)
}
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}

