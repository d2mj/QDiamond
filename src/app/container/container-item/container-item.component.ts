import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

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
  @ViewChild('cell') cell: ElementRef;
  cellVisited = [];

  constructor() { }

  ngOnInit() {}

  clickSquare() {
    if (this.cellVisited.indexOf(this.rIndex + '' + this.cIndex) > -1) {
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
        break;
      }
    }
    if (!diamondFound) {
      this.cell.nativeElement.style.backgroundImage = 'none';
    }
    this.cellVisited.push(this.rIndex + '' + this.cIndex);
  }

}
