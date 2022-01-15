import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app.router';

@NgModule({
    declarations: 
    [PublicComponent,
    HomeComponent],
    imports: [ CommonModule, AppRoutingModule],
    exports: [PublicComponent,
        HomeComponent],

})
export class PublicModule {}