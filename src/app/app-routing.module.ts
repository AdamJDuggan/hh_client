// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HubsComponent } from './components/hubs/hubs.component';
// Routes
import { routes } from './app.routes';

const appRoutes: Routes = [
  { path: routes.LOGIN, component: LoginComponent },
  { path: routes.HOME, component: LoginComponent },
  { path: routes.HUBS, component: HubsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
