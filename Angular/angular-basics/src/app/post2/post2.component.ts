import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.scss']
})
export class Post2Component {
  backgroundToggle = false;
  array = [1, 3, 4, 5, 6];
  now = new Date();
}
