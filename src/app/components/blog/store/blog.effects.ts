import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { filter, map } from 'rxjs/operators';

import { FETCH_POST, FETCH_POSTS, FetchPost, SetPost, SetPosts } from './blog.actions';

@Injectable()
export class BlogEffects {

    @Effect()
    fetchPosts = this.actions$
        .ofType(FETCH_POSTS)
        .pipe(
            // switchMap(() => this.httpClient.get(Urls.FETCH_POSTS)),
            map(posts => new SetPosts([{
                title: 'Blog 1',
                text: 'Amazing blog post',
                id: 1
            }])));

    @Effect()
    fetchPost = this.actions$
            .ofType(FETCH_POST)
            .pipe(
                //switchMap,
                map((action: FetchPost)  => new SetPost({
                    title: 'Blog 1',
                    text: 'Amazing blog post',
                    id: action.payload
                }))
            );

    @Effect()
    onBlogsOpen = this.actions$
        .ofType(ROUTER_NAVIGATION)
        .pipe(filter((action: RouterNavigationAction) => action.payload.event.url === '/blog')
            , map(action => ({ type: FETCH_POSTS })));

    @Effect()
    onBlogOpen = this.actions$
        .ofType(ROUTER_NAVIGATION)
        .pipe(filter((action: RouterNavigationAction) => /^(\/blog\/)\d+$/.test(action.payload.event.url))
            , map(action => new FetchPost(action.payload.event.state.root.params['id'])));

    constructor(
        private actions$: Actions,
        private httpClient: HttpClient) { }
}