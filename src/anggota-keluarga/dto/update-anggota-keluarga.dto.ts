import { PartialType } from '@nestjs/mapped-types';
import { CreateAnggotaKeluargaDto } from './create-anggota-keluarga.dto';

export class UpdateAnggotaKeluargaDto extends PartialType(CreateAnggotaKeluargaDto) {}
