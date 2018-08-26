import { Routes } from '@angular/router';
import { SmmComponent } from './components/smm/smm.component';
import { AuthorComponent } from './components/author/author.component';
import { AuthComponent } from './components/auth/auth.component';
import { PhotoMainComponent } from './photo/photo-main/photo-main.component';
import { AuthoerEditComponent } from './components/admin/authoer-edit/authoer-edit.component';

export const AppRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'photo' },
    { path: 'smm', component: SmmComponent },
    { path: 'blog', loadChildren: './components/blog/blog.module#BlogModule' },
    { path: 'author', component: AuthorComponent },
    { path: 'account', component: AuthComponent },
    { path: 'photo', component: PhotoMainComponent },
    { path: 'edit-author', component: AuthoerEditComponent}
];
