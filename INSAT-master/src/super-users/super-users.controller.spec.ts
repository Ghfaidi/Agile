import { Test, TestingModule } from '@nestjs/testing';
import { SuperUsersController } from './super-users.controller';
import { SuperUsersService } from './super-users.service';

describe('SuperUsersController', () => {
  let controller: SuperUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperUsersController],
      providers: [SuperUsersService],
    }).compile();

    controller = module.get<SuperUsersController>(SuperUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
