import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface IHeader {
  header: string;
  subheaders: string[];
};

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public blogState: Observable<IPostsState>;
  public headers: IHeader[];

  constructor(private store: Store<IPostsState>) { }

  ngOnInit() {
    this.blogState = this.store.select('blog');
    this.headers = [];
    for (let i = 0; i < 3; ++i) {
      const newHeader: IHeader = {
        header: `Header ${i}`,
        subheaders: []
      };
      for (let j = 0; j < 3; ++j) {
        newHeader.subheaders.push(`Subheader ${j}`);
      }
      this.headers.push(newHeader);
    }
      console.log(this.headers);
  }
}
