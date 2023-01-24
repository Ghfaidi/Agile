import { Test, TestingModule } from '@nestjs/testing';
import { AffichagesController } from './affichages.controller';
import { AffichagesService } from './affichages.service';

describe('AffichagesController', () => {
  let controller: AffichagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AffichagesController],
      providers: [AffichagesService],
    }).compile();

    controller = module.get<AffichagesController>(AffichagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
