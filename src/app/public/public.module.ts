import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app.router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
    declarations: 
    [PublicComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent],
    imports: [ CommonModule, AppRoutingModule],
    exports: [PublicComponent,
        HomeComponent],

})
export class PublicModule {}