import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title = 'Default title'
  @Output() close = new EventEmitter<void>()

  constructor() { }

  ngOnInit() {
  }

}
