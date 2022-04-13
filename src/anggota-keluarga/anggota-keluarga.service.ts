import { Injectable } from '@nestjs/common';
import { CreateAnggotaKeluargaDto } from './dto/create-anggota-keluarga.dto';
import { UpdateAnggotaKeluargaDto } from './dto/update-anggota-keluarga.dto';

@Injectable()
export class AnggotaKeluargaService {
  create(createAnggotaKeluargaDto: CreateAnggotaKeluargaDto) {
    return 'This action adds a new anggotaKeluarga';
  }

  findAll() {
    return `This action returns all anggotaKeluarga`;
  }

  findOne(id: number) {
    return `This action returns a #${id} anggotaKeluarga`;
  }

  update(id: number, updateAnggotaKeluargaDto: UpdateAnggotaKeluargaDto) {
    return `This action updates a #${id} anggotaKeluarga`;
  }

  remove(id: number) {
    return `This action removes a #${id} anggotaKeluarga`;
  }
}
