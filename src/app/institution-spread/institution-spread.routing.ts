import { Routes, RouterModule } from '@angular/router';
import { InstitutionSpreadComponent } from './components/institution-spread/institution-spread.component';

const appRoutes: Routes = [
  { path: 'institution-spread', component: InstitutionSpreadComponent }
];

export const InstitutionSpreadRouting = RouterModule.forRoot(appRoutes);
