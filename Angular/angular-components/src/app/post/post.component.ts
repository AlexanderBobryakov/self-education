import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss', '../app.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @ContentChild('info', {static: true}) contentRef: ElementRef;  // ссылка на шаблона который передан внутрь шаблона
  
  constructor() { }

  ngOnInit(): void {
  }

}
