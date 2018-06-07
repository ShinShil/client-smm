import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { appReducers } from './app.reducers';
import { AppRoutes } from './app.routes';
import { AuthorComponent } from './components/author/author.component';
import { BlogModule } from './components/blog/blog.module';
import { PostEditComponent } from './components/blog/post-edit/post-edit.component';
import { PostComponent } from './components/blog/post/post.component';
import { PostsComponent } from './components/blog/posts/posts.component';
import { SmmComponent } from './components/smm/smm.component';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SmmComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
