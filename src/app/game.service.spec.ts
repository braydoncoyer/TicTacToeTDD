import {ComponentFixture, TestBed} from '@angular/core/testing';

import { GameService } from './game.service';
import SpyInstance = jest.SpyInstance;
import {componentFactoryName} from '@angular/compiler';
import {GameState} from './models/game-state';

describe('GameService', () => {
  let service: GameService;
  let dummyboard: Map<any, any>;
  let dummyBoardValues = [];
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = TestBed.get(GameService);
    dummyBoardValues = ["X", "O", "O", "X", "O", "X", "O", "O", "X"];
    dummyboard = new Map([[0, null], [1, null], [2, null], [3, null], [4, null], [5, null], [6, null], [7, null], [8, null]]);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('isGameEnded Function', () => {
    it('Should call isGameEnded and return true', () => {
      const isGameEndedSpy: SpyInstance = jest.spyOn(service, 'isGameEnded');
      isGameEndedSpy.mockReturnValue(true);
      const result = service.isGameEnded(null);
      expect(isGameEndedSpy).toHaveBeenCalled();
      expect(result).toBe(true);
    });
  });

  describe('getNextPlayer Function', () => {
    it('Should call getNextPlayer and return X', () => {
      const result = service.getNextPlayer("O");
      expect(result).toBe("X");
    });

    it('Should call getNextPlayer and return O', () => {
      const result = service.getNextPlayer("X");
      expect(result).toBe("O");
    });
  });

  describe('isGameEnded Function', () => {
    it('should not try to detect if game is over if board has less than five played tiles', () => {
      dummyboard.set(0, "X");
      dummyboard.set(1, "X");
      dummyboard.set(2, "O");

      const expectedState: GameState = {
        isOver: false,
        winner: ''
      };

      const result = service.isGameEnded(dummyboard);

      expect(result).toEqual(expectedState);
    });

    it('should call the checkForTie function if there are 9 moves on the board', () => {
      dummyboard.set(0, "X");
      dummyboard.set(1, "X");
      dummyboard.set(2, "X");
      dummyboard.set(3, "O");
      dummyboard.set(4, "X");
      dummyboard.set(5, "X");
      dummyboard.set(6, "X");
      dummyboard.set(7, "X");
      dummyboard.set(8, "O");

      const spy = spyOn(service, 'checkForTie');

      service.isGameEnded(dummyboard);

      expect(spy).toHaveBeenCalled();
    });

    it('should return true for a winning game situation', () => {
      dummyboard.set(0, "X");
      dummyboard.set(1, "X");
      dummyboard.set(2, "X");
      dummyboard.set(3, "O");
      dummyboard.set(4, "X");

      const expectedState: GameState = {
        isOver: true,
        winner: 'SOMEONE!'
      };

      const result = service.isGameEnded(dummyboard);
      expect(result).toEqual(expectedState);
    });

    it('should return false for a winning game situation', () => {
      dummyboard.set(0, "X");
      dummyboard.set(1, "O");
      dummyboard.set(2, "X");
      dummyboard.set(3, "O");
      dummyboard.set(4, "X");

      const expectedState: GameState = {
        isOver: false,
        winner: ''
      };

      const result = service.isGameEnded(dummyboard);
      expect(result).toEqual(expectedState);
    });
  });

  describe('checkForTie Function', () => {
    it('should call checkForWin Function', () => {
      const spy = spyOn(service, 'checkForWin');
      service.checkForTie(dummyBoardValues);
      expect(spy).toHaveBeenCalled();
    });

    it('should return false if there are 9 moves on the board, resulting in a tie', () => {
      dummyBoardValues = ["X", "O", "X", "X", "X", "O", "O", "X", "O"];
      const result = service.checkForTie(dummyBoardValues);
      const expectedState: GameState = {
        isOver: false,
        winner: ''
      };
      expect(result).toEqual(expectedState);
    });

    it('should return true if there are 9 moves on the board but there is a winner', () => {
      dummyBoardValues = ["X", "O", "O", "X", "X", "O", "O", "O", "X"];
      const expectedState: GameState = {
        isOver: true,
        winner: 'SOMEONE!'
      };
      const result = service.checkForTie(dummyBoardValues);
      expect(result).toEqual(expectedState);
    });
  });

  describe('getGameState Function', () => {
    it('should return the gameState Object', () => {
      const result = service.getGameState();
      expect(result).toBe(service.gameState);
    });
  })
});
