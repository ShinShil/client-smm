import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FetchPost } from '../store/blog.actions';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public blogState: Observable<IPostsState>

  constructor(
    private store: Store<IPostsState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.blogState = this.store.select('blog');
  }

}
