import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tic-tac-toe-with-jest';
  name: String;
  ngOnInit(): void {
    this.setName();
  }
  setName() {
    if (this.title === 'tic-tac-toe-with-jest') {
      this.name = 'Braydon';
    }
  }
}
