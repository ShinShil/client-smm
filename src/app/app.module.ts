import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxMasonryModule } from 'ngx-masonry';

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
import { AuthComponent } from './components/auth/auth.component';
import { PhotoMainComponent } from './photo/photo-main/photo-main.component';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthoerEditComponent } from './components/admin/authoer-edit/authoer-edit.component';
import { FormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [
    AppComponent,
    SmmComponent,
    AuthorComponent,
    AuthComponent,
    PhotoMainComponent,
    AuthoerEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ScrollToModule.forRoot(),
    MatInputModule,
    MatButtonModule,
    NgxMasonryModule,
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
