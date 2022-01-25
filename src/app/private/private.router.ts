import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrivateComponent } from './private.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterOutletComponent } from './shared/router-outlet/router-outlet.component';

const routes: Routes = [
    { path: 'private', component: PrivateComponent,children:
    [{path:'private', component: HomeComponent},
     {path:'',redirectTo:'/private', pathMatch:'full'}]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrivateRoutingModule {}
