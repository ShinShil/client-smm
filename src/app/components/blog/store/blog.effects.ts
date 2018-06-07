import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, switchMap, filter } from 'rxjs/operators';

import { Urls } from '../../../urls.constant';
import { FETCH_POSTS, SetPosts } from './blog.actions';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';

@Injectable()
export class BlogEffects {

    @Effect()
    fetchPosts = this.actions$
        .ofType(FETCH_POSTS)
        .pipe(switchMap(() => this.httpClient.get(Urls.FETCH_POSTS))
            , map(posts => new SetPosts(posts as any[])));

    @Effect()
    onBlogOpen = this.actions$
        .ofType(ROUTER_NAVIGATION)
        .pipe(filter((action: RouterNavigationAction) => action.payload.event.url === '/blog')
            , map(action => ({ type: FETCH_POSTS })));

    constructor(
        private actions$: Actions,
        private httpClient: HttpClient) { }
}