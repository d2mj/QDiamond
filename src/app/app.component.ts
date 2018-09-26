import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  size = [0, 1, 2, 3, 4, 5, 6, 7];
  diamondColPos = [];
  diamondRowPos = [];

  ngOnInit() {
    while (this.diamondColPos.length < 8) {
      const randomnumber = Math.floor(Math.random() * 8);
      if (this.diamondColPos.indexOf(randomnumber) > -1) {
        continue;
      }
      this.diamondColPos[this.diamondColPos.length] = randomnumber;
    }

    while (this.diamondRowPos.length < 8) {
      const randomnumber = Math.floor(Math.random() * 8);
      if (this.diamondRowPos.indexOf(randomnumber) > -1) {
        continue;
      }
      this.diamondRowPos[this.diamondRowPos.length] = randomnumber;
    }
    console.log('diamond row: ', this.diamondRowPos);
    console.log('diamond col: ', this.diamondColPos);
  }
}
