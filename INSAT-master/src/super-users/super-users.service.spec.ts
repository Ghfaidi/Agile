import { Test, TestingModule } from '@nestjs/testing';
import { SuperUsersService } from './super-users.service';

describe('SuperUsersService', () => {
  let service: SuperUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperUsersService],
    }).compile();

    service = module.get<SuperUsersService>(SuperUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
