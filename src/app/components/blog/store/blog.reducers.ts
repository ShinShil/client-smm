import { BlogActions, SAVE_POST, SET_POST, SET_POSTS } from './blog.actions';


const initialState: IPostsState = {
    posts: [],
    currEditedPost: null
}

export function BlogReducer(state: IPostsState = initialState, action: BlogActions): IPostsState {
    switch (action.type) {
        case SAVE_POST:
            const updatingIndex = state.posts.findIndex(post => post.id === state.currEditedPost.id);
            const newPosts = [...state.posts]
            if (updatingIndex > -1) {
                newPosts[updatingIndex] = state.currEditedPost;
            } else {
                newPosts.push(state.currEditedPost);
            }
            return {
                ...state,
                posts: newPosts
            }
        case SET_POSTS:
            return {
                ...state,
                posts: [...action.payload]
            }
        case SET_POST:
            return {
                ...state,
                currEditedPost: {...action.payload}                
            }
        default:
            return state;
    }
}