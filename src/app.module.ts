import { Module } from '@nestjs/common';
import { KeluargaModule } from './keluarga/keluarga.module';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [KeluargaModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
