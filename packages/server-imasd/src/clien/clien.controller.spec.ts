import { Test, TestingModule } from '@nestjs/testing';
import { ClienController } from './clien.controller';
import { ClienService } from './clien.service';

describe('ClienController', () => {
  let controller: ClienController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClienController],
      providers: [ClienService],
    }).compile();

    controller = module.get<ClienController>(ClienController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
