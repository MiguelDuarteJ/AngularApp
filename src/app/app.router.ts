import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public/public.router';
import { PrivateRoutingModule } from './private/private.router';
import { AuthRoutingModule } from './auth/auth.router';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PrivateComponent } from './private/private.component';


const routes: Routes = [

];

@NgModule({
    imports: [RouterModule.forRoot(routes),
    PublicRoutingModule,
    PrivateRoutingModule,
    AuthRoutingModule],
    exports: [RouterModule]
})
export class AppRoutingModule {}
