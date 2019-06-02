import {ComponentFixture, TestBed} from '@angular/core/testing';

import { GameService } from './game.service';
import SpyInstance = jest.SpyInstance;

describe('GameService', () => {
  let service: GameService;
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = TestBed.get(GameService);
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

  })
});
