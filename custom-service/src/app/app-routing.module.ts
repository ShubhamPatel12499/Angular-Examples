import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './server/server.component';
import { LoginComponent } from './login/login.component';
import { EditServerComponent } from './server/editserver/editserver.component';
import { CartComponent } from './cart/cart.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'server', component: ServerComponent,
    children: [
    // { path: ':id', component: ServerComponent},
    { path: ':id/edit', component: EditServerComponent}
  ] },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'cart', component: CartComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}