import { Test, TestingModule } from '@nestjs/testing';
import { EmploiesService } from './emploies.service';

describe('EmploiesService', () => {
  let service: EmploiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmploiesService],
    }).compile();

    service = module.get<EmploiesService>(EmploiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
