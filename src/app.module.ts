import { Module, Provider, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { KeluargaModule } from './keluarga/keluarga.module';
import { PrismaModule } from './prisma/prisma.module';
import { AnggotaKeluargaModule } from './anggota-keluarga/anggota-keluarga.module';

const validationPipeProvider: Provider = {
  provide: APP_PIPE,
  useValue: new ValidationPipe({
    whitelist: true,
  }),
};

@Module({
  imports: [PrismaModule, KeluargaModule, AnggotaKeluargaModule],
  controllers: [],
  providers: [validationPipeProvider],
})
export class AppModule {}
