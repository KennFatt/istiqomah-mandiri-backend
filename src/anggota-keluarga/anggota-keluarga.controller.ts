import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnggotaKeluargaService } from './anggota-keluarga.service';
import { CreateAnggotaKeluargaDto } from './dto/create-anggota-keluarga.dto';
import { UpdateAnggotaKeluargaDto } from './dto/update-anggota-keluarga.dto';

@Controller('anggota-keluarga')
export class AnggotaKeluargaController {
  constructor(private readonly anggotaKeluargaService: AnggotaKeluargaService) {}

  @Post()
  create(@Body() createAnggotaKeluargaDto: CreateAnggotaKeluargaDto) {
    return this.anggotaKeluargaService.create(createAnggotaKeluargaDto);
  }

  @Get()
  findAll() {
    return this.anggotaKeluargaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.anggotaKeluargaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnggotaKeluargaDto: UpdateAnggotaKeluargaDto) {
    return this.anggotaKeluargaService.update(+id, updateAnggotaKeluargaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anggotaKeluargaService.remove(+id);
  }
}
