import { NavComponent } from '../nav/nav.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRouting } from '../app.routing';
import { LeaderPipsModule } from '../leader-pips/leader-pips.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule, MatButtonModule, MatMenuModule, MatCardModule, MatChipsModule, MatSidenavModule } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

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
        FlexLayoutModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        NavComponent,
        HomepageComponent
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
