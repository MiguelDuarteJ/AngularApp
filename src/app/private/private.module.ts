import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app.router';

@NgModule({
    declarations: [PrivateComponent, HomeComponent],
    imports: [ CommonModule, AppRoutingModule],
    exports: [PrivateComponent,HomeComponent],
})
export class PrivateModule {}