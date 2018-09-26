import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() size;
  @Input() cIndex;
  @Input() diamondColPos;
  @Input() diamondRowPos;
  @Output() dCount = new EventEmitter<any>();
  @Output() visitCount = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {

  }

}
