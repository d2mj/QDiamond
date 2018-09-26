import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-container-item',
  templateUrl: './container-item.component.html',
  styleUrls: ['./container-item.component.css']
})
export class ContainerItemComponent implements OnInit {

  @Input() rIndex;
  @Input() cIndex;
  @Input() diamondColPos;
  @Input() diamondRowPos;

  @Output() dCount = new EventEmitter<any>();
  @Output() visitCount = new EventEmitter<any>();
  @ViewChild('cell') cell: ElementRef;
  isCellVisited = false;

  constructor() {
  }

  ngOnInit() {

  }

  clickSquare() {
    if (this.isCellVisited) {
      console.log('cell is already visited');
      return;
    }
    console.log('indexes ', this.rIndex, this.cIndex);
    let diamondFound = false;
    for (let i = 0; i < this.diamondRowPos.length; i++) {
      const diaRw = this.diamondRowPos[i];
      const diaCol = this.diamondColPos[i];
      if (diaRw === this.rIndex && diaCol === this.cIndex) {
        console.log('diamond found');
        this.cell.nativeElement.style.backgroundImage = 'url(../../../assets/diamond.png)';
        diamondFound = true;
        this.dCount.emit('');
        break;
      }
    }
    if (!diamondFound) {
      this.cell.nativeElement.style.backgroundImage = 'none';
    }
    this.isCellVisited = true;
    this.visitCount.emit('');
  }

}
