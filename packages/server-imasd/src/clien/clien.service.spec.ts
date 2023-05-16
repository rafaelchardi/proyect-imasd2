import { Test, TestingModule } from '@nestjs/testing';
import { ClienService } from './clien.service';

describe('ClienService', () => {
  let service: ClienService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClienService],
    }).compile();

    service = module.get<ClienService>(ClienService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
