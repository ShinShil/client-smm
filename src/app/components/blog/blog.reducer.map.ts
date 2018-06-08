import { ActionReducerMap } from "@ngrx/store";
import { BlogReducer } from "./store/blog.reducers";

export const BlogReducerMap: ActionReducerMap<IBlogState> = {
    blog: BlogReducer
};
