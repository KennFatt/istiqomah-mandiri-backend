import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { KeluargaService } from './keluarga.service';
import { CreateKeluargaDto } from './dto/create-keluarga.dto';
import { UpdateKeluargaDto } from './dto/update-keluarga.dto';

@Controller('keluarga')
export class KeluargaController {
  constructor(private readonly keluargaService: KeluargaService) {}

  @Post()
  create(@Body() createKeluargaDto: CreateKeluargaDto) {
    return this.keluargaService.create(createKeluargaDto);
  }

  @Get()
  findAll() {
    return this.keluargaService.findAll();
  }

  @Get(':no_induk')
  findOne(@Param('no_induk') no_induk: string) {
    return this.keluargaService.findOne(no_induk);
  }

  @Patch(':no_induk')
  update(
    @Param('no_induk') no_induk: string,
    @Body() updateKeluargaDto: UpdateKeluargaDto,
  ) {
    return this.keluargaService.update(no_induk, updateKeluargaDto);
  }

  @Delete(':id')
  remove(@Param('id') no_induk: string) {
    return this.keluargaService.remove(no_induk);
  }

  @Get(':no_induk/anggota')
  findAnggotaKeluarga(@Param('no_induk') no_induk: string) {
    return this.keluargaService.findAnggotaKeluarga(no_induk);
  }
}
