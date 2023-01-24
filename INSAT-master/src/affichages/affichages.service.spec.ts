import { Test, TestingModule } from '@nestjs/testing';
import { AffichagesService } from './affichages.service';

describe('AffichagesService', () => {
  let service: AffichagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AffichagesService],
    }).compile();

    service = module.get<AffichagesService>(AffichagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
