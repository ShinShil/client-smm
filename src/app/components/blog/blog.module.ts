import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BlogRoutes } from "./blog.routes";
import { StoreModule } from "@ngrx/store";
import { BlogReducer } from "./store/blog.reducers";
import { EffectsModule } from "@ngrx/effects";
import { BlogEffects } from "./store/blog.effects";
import { PostsComponent } from "./posts/posts.component";
import { PostComponent } from "./post/post.component";
import { PostEditComponent } from "./post-edit/post-edit.component";
import { CommonModule } from "@angular/common";
import { BlogReducerMap } from "./blog.reducer.map";

@NgModule({
    declarations: [
        PostComponent,
        PostEditComponent,
        PostsComponent
    ],
    providers: [],
    imports: [
        CommonModule,
        RouterModule.forChild(BlogRoutes),
        StoreModule.forFeature('blog', BlogReducer),
        EffectsModule.forFeature([BlogEffects])
    ]
})
export class BlogModule {

}