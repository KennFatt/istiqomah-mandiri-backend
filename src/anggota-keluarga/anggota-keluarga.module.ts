import { Module } from '@nestjs/common';
import { AnggotaKeluargaService } from './anggota-keluarga.service';
import { AnggotaKeluargaController } from './anggota-keluarga.controller';

@Module({
  controllers: [AnggotaKeluargaController],
  providers: [AnggotaKeluargaService]
})
export class AnggotaKeluargaModule {}
