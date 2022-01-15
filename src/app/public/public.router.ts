import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
   { path: '', component: PublicComponent,children:
   [{path:'cliente', component: HomeComponent},
    {path:'',redirectTo:'/cliente', pathMatch:'full'}] },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule {}
