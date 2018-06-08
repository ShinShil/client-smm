interface IPostModel {
    id: number;
    title: string;
    text: string;
}

interface IAppState {
    
}

interface IBlogState extends IAppState {
    blog: IPostsState;
}

interface IPostsState extends IAppState{
    posts: IPostModel[];
    currEditedPost: IPostModel;
}
