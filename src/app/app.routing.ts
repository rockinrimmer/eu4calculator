import { HomepageComponent } from './homepage/homepage.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
];

export const AppRouting = RouterModule.forRoot(appRoutes);
