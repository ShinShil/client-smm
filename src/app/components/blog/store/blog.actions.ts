import { Action } from '@ngrx/store';

export const SAVE_POST = 'SAVE_POST';
export const SAVE_POST_TO_SERVER = 'SAVE_POST_TO_SERVER';
export const SET_POSTS = 'SET_POSTS';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const SET_POST = 'SET_POST';

export class SavePost implements Action {
    readonly type = SAVE_POST;

    constructor() { }
}

export class SetPosts implements Action {
    readonly type = SET_POSTS;

    constructor(public payload: IPostModel[]) { }
}

export class SetPost implements Action {
    readonly type = SET_POST;

    constructor(public payload?: IPostModel) { }
}

export class FetchPost implements Action {
    readonly type = FETCH_POST;
    constructor(public payload: number) { }
}

export type BlogActions = SavePost | SetPosts | SetPost; 
