import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {id: 1, title: 'Post1 TITLE', text: 'Post1'},
    {id: 2, title: 'Post2 TITLE', text: 'Post2Post2 Post2Post2 Post2Post2 Post2 Post2 Post2Post2 Post2Post2 Post2Post2 Pos'},
    {id: 3, title: 'Post3 TITLE', text: 'Post3 Post3 Post3 Post3 Post3  Post3'},
    {id: 4, title: 'Post4 TITLE', text: 'Post4 Post4 Post4 Post4 Post4 Post4Post4 Post4 Post4'}
  ];
}
