import { Routes } from '@angular/router';
import { SmmComponent } from './components/smm/smm.component';
import { AuthorComponent } from './components/author/author.component';
import { AuthComponent } from './components/auth/auth.component';

export const AppRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'smm' },
    { path: 'smm', component: SmmComponent },
    { path: 'blog', loadChildren: './components/blog/blog.module#BlogModule' },
    { path: 'author', component: AuthorComponent },
    { path: 'account', component: AuthComponent }
];
