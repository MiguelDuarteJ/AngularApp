import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrivateComponent } from './private.component';
import {HomeComponent } from './home/home.component'



const routes: Routes = [
    { path: 'servidor', component: PrivateComponent,children:
    [{path:'inicio', component: HomeComponent},
     {path:'',redirectTo:'inicio', pathMatch:'full'}]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrivateRoutingModule {}
