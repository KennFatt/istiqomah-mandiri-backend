import { Test, TestingModule } from '@nestjs/testing';
import { AnggotaKeluargaService } from './anggota-keluarga.service';

describe('AnggotaKeluargaService', () => {
  let service: AnggotaKeluargaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnggotaKeluargaService],
    }).compile();

    service = module.get<AnggotaKeluargaService>(AnggotaKeluargaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
