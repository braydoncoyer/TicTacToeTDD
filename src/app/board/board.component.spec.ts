import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import {GameService} from '../game.service';
import SpyInstance = jest.SpyInstance;
import {Component, Input} from '@angular/core';
import {GameState} from '../models/game-state';
import Spy = jasmine.Spy;

@Component({
  selector: 'app-tile',
  template: ''
})
class MockTileComponent {
  @Input() value: string;
  @Input() id: number;
}

describe('BoardComponent', () => {
  let component: BoardComponent;
  // let mockService: MockGameService;
  let service: GameService;
  let fixture: ComponentFixture<BoardComponent>;
  let expectedMapValueAfterInitialize: Map<any, any>;

  class MockGameService {
    gameState: GameState;

    constructor() {
    }


    isGameEnded() {

    }

    checkForWin() {

    }

    checkForTie() {

    }

    getNextPlayer() {

    }

    getGameState() {

    }

    setGameState() {

    }
  }

  beforeEach(async(() => {
    // mockService = new MockGameService();

    TestBed.configureTestingModule({
      declarations: [ BoardComponent, MockTileComponent ],
      providers: [{provide: GameService, useClass: MockGameService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    expectedMapValueAfterInitialize =  new Map([[0, null], [1, null], [2, null], [3, null], [4, null], [5, null], [6, null], [7, null], [8, null]]);
    fixture.detectChanges();
    service = TestBed.get(GameService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //
  // describe('Initialize BoardMap', () => {
  //   it('should initialize and reset boardMap', () => {
  //     const initBoardMapSpy: SpyInstance = jest.spyOn(component, 'initBoardMap');
  //     component.ngOnInit();
  //     expect(initBoardMapSpy).toHaveBeenCalled();
  //   });
  //
  //   it('should reset the board values to default values', () => {
  //     component.initBoardMap();
  //     expect(component.boardMap).toEqual(expectedMapValueAfterInitialize);
  //   })
  // });
  //
  // describe('Game Ended Method', () => {
  //   it('should call service and determine if the game is over', () => {
  //     const spy: SpyInstance = jest.spyOn(service, 'isGameEnded');
  //     spy.mockReturnValue({isOver: true, winner: ''});
  //     const result = component.checkGameEnded();
  //     expect(result).toEqual({isOver: true, winner: ''});
  //     expect(spy).toHaveBeenCalled();
  //   });
  // });
  //
  // describe('Increment Turn Method', () => {
  //   it('should not change currentPlayer turn if game is over', () => {
  //     component.currentPlayer = 'X';
  //     const gameEndedSpy: SpyInstance = jest.spyOn(service, 'isGameEnded');
  //     const getNextPlayerSpy: SpyInstance = jest.spyOn(service, 'getNextPlayer');
  //     const getGameState: SpyInstance = jest.spyOn(component, 'getGameState').mockReturnValue({isOver: true, winner: 'X'});
  //     gameEndedSpy.mockReturnValue(true);
  //     component.incrementTurn();
  //     expect(getNextPlayerSpy).not.toHaveBeenCalled();
  //     expect(component.getGameState().isOver).toBe(true);
  //     expect(component.currentPlayer).toBe('X');
  //   });
  //
  //   it('should change currentPlayer if game is not over', () => {
  //     component.currentPlayer = 'X';
  //     const gameEndedSpy: SpyInstance = jest.spyOn(service, 'isGameEnded');
  //     const getNextPlayerSpy: SpyInstance = jest.spyOn(service, 'getNextPlayer');
  //     const getGameState: SpyInstance = jest.spyOn(component, 'getGameState').mockReturnValue({isOver: false, winner: 'X'});
  //     gameEndedSpy.mockReturnValue(false);
  //     getNextPlayerSpy.mockReturnValue('O');
  //     component.incrementTurn();
  //     expect(getNextPlayerSpy).toHaveBeenCalled();
  //     expect(getNextPlayerSpy).toHaveBeenCalledWith('X');
  //     expect(component.getGameState().isOver).toBe(false);
  //     expect(component.currentPlayer).toBe('O');
  //   });
  // });
  //
  // describe('Make Move Method', () => {
  //   it('should update the boardMap if spot is empty', () => {
  //     component.currentPlayer = 'X';
  //     component.initBoardMap();
  //     const makeMoveSpy: SpyInstance = jest.spyOn(component, 'makeMove');
  //     const incrementTurnSpy: SpyInstance = jest.spyOn(component, 'incrementTurn');
  //     const getGameState: SpyInstance = jest.spyOn(component, 'getGameState').mockReturnValue({isOver: false, winner: ''});
  //     component.makeMove(0);
  //     expect(makeMoveSpy).toHaveBeenCalledWith(0);
  //     expect(component.boardMap.get(0)).toBe("X");
  //     expect(incrementTurnSpy).toHaveBeenCalled();
  //   });
  //
  //   it('should not update the boardMap if spot is filled', () => {
  //     component.currentPlayer = 'X';
  //     component.boardMap.set(0, "O");
  //     const makeMoveSpy: SpyInstance = jest.spyOn(component, 'makeMove');
  //     const incrementTurnSpy: SpyInstance = jest.spyOn(component, 'incrementTurn');
  //     component.makeMove(0);
  //     expect(makeMoveSpy).toHaveBeenCalledWith(0);
  //     expect(component.boardMap.get(0)).toBe("O");
  //     expect(incrementTurnSpy).not.toHaveBeenCalled();
  //   });
  // });
  //
  // describe('Reset Game Method', () => {
  //   it('should reset the board map', () => {
  //     const spy = jest.spyOn(component, 'initBoardMap');
  //     component.startNewGame();
  //     expect(spy).toHaveBeenCalled();
  //   });
  //
  //   it('should reset currentPlayer to X', () => {
  //     component.currentPlayer = "O";
  //     component.startNewGame();
  //     expect(component.currentPlayer).toBe("X");
  //   });
  // });
  //
  // describe('getGameState Function', () => {
  //   it('should call the service method to get the game state', () => {
  //     const spy: SpyInstance = jest.spyOn(service, 'getGameState');
  //
  //     component.getGameState();
  //
  //     expect(spy).toHaveBeenCalled();
  //   })
  // });
});
