import {Component, OnInit} from '@angular/core';

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
export class AppComponent implements OnInit{
  posts: Post[] = [
    {id: 1, title: 'Post1 TITLE', text: 'Post1'},
  ];

  updatePost(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    console.log(id);
    this.posts = this.posts.filter(p => p.id !== id)
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Timeout');
      this.posts[0].title = 'Changed!'
    }, 5000)
  }
}
