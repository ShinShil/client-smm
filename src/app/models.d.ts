interface IPostModel {
    id: number;
    title: string;
    body: string;
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

interface  IAuthorModel {
    about: string;
    workExperience: string;
    education: string;
    awards: string;
}
