import { Test, TestingModule } from '@nestjs/testing';
import { EmploiesController } from './emploies.controller';
import { EmploiesService } from './emploies.service';

describe('EmploiesController', () => {
  let controller: EmploiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmploiesController],
      providers: [EmploiesService],
    }).compile();

    controller = module.get<EmploiesController>(EmploiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
