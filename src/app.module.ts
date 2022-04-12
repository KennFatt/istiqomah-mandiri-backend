import { Module, Provider, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { KeluargaModule } from './keluarga/keluarga.module';
import { PrismaModule } from './prisma/prisma.module';

const validationPipeProvider: Provider = {
  provide: APP_PIPE,
  useValue: new ValidationPipe({
    whitelist: true,
  }),
};

@Module({
  imports: [PrismaModule, KeluargaModule],
  controllers: [],
  providers: [validationPipeProvider],
})
export class AppModule {}
