import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public/public.router';
import { PrivateRoutingModule } from './private/private.router';
import { AuthRoutingModule } from './auth/auth.router';


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
