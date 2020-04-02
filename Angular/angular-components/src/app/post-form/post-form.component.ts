import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss', '../app.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  title: string;
  text: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      };
      this.onAdd.emit(post);  // отправляет данные
      this.title = this.text = '';
    }
  }

}
