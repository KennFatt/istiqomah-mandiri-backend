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

  findOne(id: number) {
    return `This action returns a #${id} keluarga`;
  }

  update(id: number, updateKeluargaDto: UpdateKeluargaDto) {
    return `This action updates a #${id} keluarga`;
  }

  remove(id: number) {
    return `This action removes a #${id} keluarga`;
  }
}
