import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';

describe('GameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameService = TestBed.get(GameService);
    expect(service).toBeTruthy();
  });

  describe('isGameEnded Function', () => {
    it('Should call isGameEnded and return true', () => {
      const service: GameService = TestBed.get(GameService);
      const isGameEndedSpy = jest.spyOn(service, 'isGameEnded');
      const result = service.isGameEnded(null);
      expect(isGameEndedSpy).toHaveBeenCalled();
      expect(result).toBe(true);
    });
  });

  describe('getNextPlayer Function', () => {
    it('Should call getNextPlayer and return null', () => {
      const service: GameService = TestBed.get(GameService);
      const getNextPlayerSpy = jest.spyOn(service, 'getNextPlayer');
      const result = service.getNextPlayer(null);
      expect(getNextPlayerSpy).toHaveBeenCalled();
      expect(result).toBe(null);
    });
  });
});
