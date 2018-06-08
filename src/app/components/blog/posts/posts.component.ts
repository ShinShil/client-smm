import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public blogState: Observable<IPostsState>;

  constructor(private store: Store<IPostsState>) { }

  ngOnInit() {
    this.blogState = this.store.select('blog');
  }
}
