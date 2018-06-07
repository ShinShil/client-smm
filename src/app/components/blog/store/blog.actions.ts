import { Action } from '@ngrx/store';

export const SAVE_POST = 'SAVE_BLOG';
export const SAVE_POST_TO_SERVER = 'SAVE_POST_TO_SERVER';
export const SET_POSTS = 'SET_BLOGS';
export const FETCH_POSTS = 'FETCH_BLOGS';
export const SET_EDITED_POST = 'SET_EDITED_BLOG';

export class SavePost implements Action {
    readonly type = SAVE_POST;

    constructor() { }
}

export class SetPosts implements Action {
    readonly type = SET_POSTS;

    constructor(public payload: IPostModel[]) { }
}

export class SetEditedPost implements Action {
    readonly type = SET_EDITED_POST;

    constructor(public payload: IPostModel) { }
}

export type BlogActions = SavePost | SetPosts | SetEditedPost; 
