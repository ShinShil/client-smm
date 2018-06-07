import { BlogActions, SAVE_POST, SET_POSTS, SET_EDITED_POST } from "./blog.actions";


const initialState: IBlogState = {
    posts: [],
    currEditedPost: null
}

export function BlogReducer(state: IBlogState = initialState, action: BlogActions) {
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
        case SET_EDITED_POST:
            return {
                ...state,
                currEditedPost: action.payload
            }
        default:
            return state;
    }
}