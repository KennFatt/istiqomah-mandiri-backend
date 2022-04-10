import { Injectable } from '@nestjs/common';
import { CreateKeluargaDto } from './dto/create-keluarga.dto';
import { UpdateKeluargaDto } from './dto/update-keluarga.dto';

@Injectable()
export class KeluargaService {
  create(createKeluargaDto: CreateKeluargaDto) {
    return 'This action adds a new keluarga';
  }

  findAll() {
    return `This action returns all keluarga`;
  }

  findOne(no_induk: string) {
    return `This action returns a #${no_induk} keluarga`;
  }

  update(no_induk: string, updateKeluargaDto: UpdateKeluargaDto) {
    return `This action updates a #${no_induk} keluarga`;
  }

  remove(no_induk: string) {
    return `This action removes a #${no_induk} keluarga`;
  }

  findAnggotaKeluarga(no_induk: string) {
    return `This action retrieve anggota keluarga from #${no_induk} keluarga`;
  }
}
