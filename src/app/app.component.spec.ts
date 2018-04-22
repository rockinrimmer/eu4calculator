import { NavComponent } from './nav/nav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRouting } from './app.routing';
import { LeaderPipsModule } from './leader-pips/leader-pips.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule, MatButtonModule, MatMenuModule, MatCardModule, MatChipsModule, MatSidenavModule, MatIconModule } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
