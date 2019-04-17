import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import {GameService} from '../game.service';
import SpyInstance = jest.SpyInstance;
import {TileComponent} from '../tile/tile.component';
import {Input} from '@angular/core';

class MockGameService {
  getNextPlayer = jest.fn( (currentPlayer: string) => {}
);

  isGameEnded = jest.fn(() => {});
}

class MockTileComponent {
  @Input() value: "X" | "O";
  @Input() id: number;

  constructor() {}

}

describe('BoardComponent', () => {
  let component: BoardComponent;
  let service: MockGameService;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    service = new MockGameService();

    TestBed.configureTestingModule({
      declarations: [ BoardComponent, TileComponent ],
      // imports: [TileComponent],
      providers: [{provide: GameService, useValue: service}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Check Game Ended Method', () => {
    it('should call service and determine if the game is over', () => {
      const spy: SpyInstance = jest.spyOn(service, 'isGameEnded');
      spy.mockReturnValue(true);
      const result = component.checkGameEnded();
      expect(result).toBe(true);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('Increment Turn Method', () => {
    it('should not change currentPlayer turn if game is over', () => {
      component.currentPlayer = 'X';
      const gameEndedSpy: SpyInstance = jest.spyOn(service, 'isGameEnded');
      const getNextPlayerSpy: SpyInstance = jest.spyOn(service, 'getNextPlayer');
      gameEndedSpy.mockReturnValue(true);
      component.incrementTurn();
      expect(getNextPlayerSpy).not.toHaveBeenCalled();
      expect(component.isGameOver).toBe(true);
      expect(component.currentPlayer).toBe('X');
    });

    it('should change currentPlayer if game is not over', () => {
      component.currentPlayer = 'X';
      const gameEndedSpy: SpyInstance = jest.spyOn(service, 'isGameEnded');
      const getNextPlayerSpy: SpyInstance = jest.spyOn(service, 'getNextPlayer');
      gameEndedSpy.mockReturnValue(false);
      getNextPlayerSpy.mockReturnValue('O');
      component.incrementTurn();
      expect(getNextPlayerSpy).toHaveBeenCalled();
      expect(getNextPlayerSpy).toHaveBeenCalledWith('X');
      expect(component.isGameOver).toBe(false);
      expect(component.currentPlayer).toBe('O');
    });
  });

  describe('Initialize BoardMap', () => {
    it('should initialize and reset boardMap', () => {
      const initBoardMapSpy: SpyInstance = jest.spyOn(component, 'initBoardMap');
      component.ngOnInit();
      expect(initBoardMapSpy).toHaveBeenCalled();
    });
  });


  describe('Make Move Method', () => {
    it('should update the boardMap if spot is empty', () => {
      component.currentPlayer = 'X';
      component.initBoardMap();
      const makeMoveSpy: SpyInstance = jest.spyOn(component, 'makeMove');
      const incrementTurnSpy: SpyInstance = jest.spyOn(component, 'incrementTurn');
      component.makeMove(0);
      expect(makeMoveSpy).toHaveBeenCalledWith(0);
      expect(component.boardMap.get(0)).toBe("X");
      expect(incrementTurnSpy).toHaveBeenCalled();
    });

    it('should not update the boardMap if spot is filled', () => {
      component.currentPlayer = 'X';
      component.boardMap.set(0, "O");
      const makeMoveSpy: SpyInstance = jest.spyOn(component, 'makeMove');
      const incrementTurnSpy: SpyInstance = jest.spyOn(component, 'incrementTurn');
      component.makeMove(0);
      expect(makeMoveSpy).toHaveBeenCalledWith(0);
      expect(component.boardMap.get(0)).toBe("O");
      expect(incrementTurnSpy).not.toHaveBeenCalled();
    });
  });
});
