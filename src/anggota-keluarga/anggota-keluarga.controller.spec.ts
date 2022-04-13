import { Test, TestingModule } from '@nestjs/testing';
import { AnggotaKeluargaController } from './anggota-keluarga.controller';
import { AnggotaKeluargaService } from './anggota-keluarga.service';

describe('AnggotaKeluargaController', () => {
  let controller: AnggotaKeluargaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnggotaKeluargaController],
      providers: [AnggotaKeluargaService],
    }).compile();

    controller = module.get<AnggotaKeluargaController>(AnggotaKeluargaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
