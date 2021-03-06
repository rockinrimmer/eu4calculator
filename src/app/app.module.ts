import { AppRouting } from './app.routing';
import { LeaderPipsModule } from './leader-pips/leader-pips.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { MatToolbarModule, MatButtonModule, MatMenuModule, MatCardModule, MatChipsModule, MatSidenavModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  imports: [
    AppRouting,
    LeaderPipsModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatChipsModule,
    MatSidenavModule,
    MatIconModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    HomepageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
