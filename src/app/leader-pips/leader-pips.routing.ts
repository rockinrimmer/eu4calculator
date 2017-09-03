import { PipCalculatorComponent } from './components/pip-calculator/pip-calculator.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'leader-pip-calculator', component: PipCalculatorComponent }
];

export const LeaderPipsRouting = RouterModule.forRoot(appRoutes);
