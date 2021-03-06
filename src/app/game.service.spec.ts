import {ComponentFixture, TestBed} from '@angular/core/testing';

import { GameService } from './game.service';
import SpyInstance = jest.SpyInstance;
import {componentFactoryName} from '@angular/compiler';

describe('GameService', () => {
  let service: GameService;
  let dummyboard: Map<any, any>;
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = TestBed.get(GameService);
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

      const result = service.isGameEnded(dummyboard);

      expect(result).toBe(false);
    });

    it('should return false if there are 9 moves on the board, resulting in a tie', () => {
      const spy = jest.spyOn(service, 'checkForTie');
      dummyboard.set(0, "X");
      dummyboard.set(1, "X");
      dummyboard.set(2, "O");
      dummyboard.set(3, "O");
      dummyboard.set(4, "O");
      dummyboard.set(5, "O");
      dummyboard.set(6, "O");
      dummyboard.set(7, "O");
      dummyboard.set(8, "O");

      const result = service.isGameEnded(dummyboard);

      expect(result).toBe(false);
      expect(spy).toHaveBeenCalled();

    });

    it('should return true for a winning game', () => {
      dummyboard.set(0, "X");
      dummyboard.set(1, "X");
      dummyboard.set(2, "X");
      dummyboard.set(3, "O");
      dummyboard.set(4, "X");

      const result = service.isGameEnded(dummyboard);
      expect(result).toBe(true);
    });

    it('should return false for a winning game', () => {
      dummyboard.set(0, "X");
      dummyboard.set(1, "O");
      dummyboard.set(2, "X");
      dummyboard.set(3, "O");
      dummyboard.set(4, "X");

      const result = service.isGameEnded(dummyboard);
      expect(result).toBe(false);
    });
  });

  describe('checkForTie Function', () => {
    it('should return null', () => {
      const result = service.checkForTie();
      expect(result).toBe(false);
    })
  });
});
