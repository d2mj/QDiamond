import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  size = [0, 1, 2, 3, 4, 5, 6, 7];
  diamondColPos = [];
  diamondRowPos = [];
  diamondCount = 0;
  cellVisitedCount = 0;
  showGameBoard = true;

  ngOnInit() {
    this.placeDiamondsIntoCells();
  }

  placeDiamondsIntoCells() {
    while (this.diamondColPos.length < 8) {
      const randomnumber = Math.floor(Math.random() * 8);
      // if (this.diamondColPos.indexOf(randomnumber) > -1) {
      //   continue;
      // }
      this.diamondColPos[this.diamondColPos.length] = randomnumber;
    }

    while (this.diamondRowPos.length < 8) {
      const randomnumber = Math.floor(Math.random() * 8);
      if (this.diamondRowPos.indexOf(randomnumber) > -1 && this.diamondColPos[this.diamondRowPos.indexOf(randomnumber)] ===
        this.diamondColPos[this.diamondRowPos.length]) {
        continue;
      }
      this.diamondRowPos[this.diamondRowPos.length] = randomnumber;
    }
    console.log('diamond row: ', this.diamondRowPos);
    console.log('diamond col: ', this.diamondColPos);
  }

  dCount(e) {
    this.diamondCount = this.diamondCount + 1;
    console.log(e, this.diamondCount);
  }

  visitCount(e) {
    this.cellVisitedCount = this.cellVisitedCount + 1;
    console.log('diamond count ', this.diamondCount, 'visited cells ', this.cellVisitedCount);
    if (this.diamondCount === 8) {
      alert(`Congratulations, you found all diamonds and your score is ${64 - this.cellVisitedCount}`);
      this.stop();
    }
  }

  start() {
    this.showGameBoard = true;
    this.diamondColPos = [];
    this.diamondRowPos = [];
    this.diamondCount = 0;
    this.cellVisitedCount = 0;
    this.placeDiamondsIntoCells();
  }

  stop() {
    this.showGameBoard = false;
  }
}
