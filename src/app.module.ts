import { Module } from '@nestjs/common';
import { KeluargaModule } from './keluarga/keluarga.module';

@Module({
  imports: [KeluargaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
