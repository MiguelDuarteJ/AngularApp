import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app.router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
    declarations: [PrivateComponent, HomeComponent, NavbarComponent, FooterComponent],
    imports: [ CommonModule, AppRoutingModule],
    exports: [PrivateComponent,HomeComponent, NavbarComponent, FooterComponent],
})
export class PrivateModule {}