import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutComponent } from './shell/layout/layout.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbThemeModule, NbLayoutModule, NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, LayoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    MatSlideToggleModule,
    NbCardModule,
  ],
})
export class AuthModule {}
