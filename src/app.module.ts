import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeluargaModule } from './keluarga/keluarga.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database/db.sqlite',
      autoLoadEntities: true,
      synchronize: true,
    }),
    KeluargaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
