import { Routes } from '@angular/router';
import { SmmComponent } from './components/smm/smm.component';

export const AppRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'smm' },
    { path: 'smm', component: SmmComponent },
    { path: 'blog', loadChildren: './components/blog/blog.module#BlogModule' }
];
