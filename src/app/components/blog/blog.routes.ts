import { Routes } from '@angular/router';

import { PostEditComponent } from './post-edit/post-edit.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

export const BlogRoutes: Routes = [
    {
        path: '', component: PostsComponent, children: [
            { path: ':id', component: PostComponent },
            { path: ':id/edit', component: PostEditComponent },
            { path: 'new', component: PostEditComponent }
        ]
    },
]