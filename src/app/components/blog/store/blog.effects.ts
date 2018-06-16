import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { filter, map, switchMap, catchError } from 'rxjs/operators';

import { FETCH_POST, FETCH_POSTS, FetchPost, SetPost, SetPosts, FetchPosts } from './blog.actions';
import { Urls } from '../../../urls.constant';
import { throwError } from 'rxjs';

@Injectable()
export class BlogEffects {

    @Effect()
    fetchPosts = this.actions$
        .ofType(FETCH_POSTS)
        .pipe(
            switchMap(() => this.httpClient.get<IPostModel[]>(Urls.FETCH_POSTS)),
            map(posts => new SetPosts(posts.slice(0, 9))));

    @Effect()
    fetchPost = this.actions$
        .ofType(FETCH_POST)
        .pipe(
            switchMap((action: FetchPost) => {
                console.log(action, Urls.FETCH_POST(action.payload));
             return this.httpClient.get<IPostModel>(Urls.FETCH_POST(action.payload))
            }),
            map(post => {
                console.log(post);
                return new SetPost(post);
            })
        );

    @Effect()
    onBlogsOpen = this.actions$
        .ofType(ROUTER_NAVIGATION)
        .pipe(filter((action: RouterNavigationAction) => action.payload.event.url === '/blog')
            , map(action => new FetchPosts()));

    @Effect()
    onBlogOpen = this.actions$
        .ofType(ROUTER_NAVIGATION)
        .pipe(filter((action: RouterNavigationAction) => /^(\/blog\/)\d+$/.test(action.payload.event.url))
            , map(action => new FetchPost(Number(action.payload.event.url.split('/')[2]))));

    constructor(
        private actions$: Actions,
        private httpClient: HttpClient) { }
}