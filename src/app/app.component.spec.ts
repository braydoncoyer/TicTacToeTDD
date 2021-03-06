import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {BoardComponent} from './board/board.component';
import {TileComponent} from './tile/tile.component';
import {Component} from '@angular/core';

@Component({
  selector: 'app-board',
  template: ''
})
class MockBoardComponent {

}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, MockBoardComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Tic-Tac-Toe'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tic-Tac-Toe');
  });
});
