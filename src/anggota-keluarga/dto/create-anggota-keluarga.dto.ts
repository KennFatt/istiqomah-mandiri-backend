import {
  IsBoolean,
  IsDate,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateAnggotaKeluargaDto {
  @IsString()
  name: string;

  @IsIn(['MALE', 'FEMALE'])
  gender: 'MALE' | 'FEMALE';

  @IsString()
  phone_number: string;

  @IsBoolean()
  is_alive: boolean;

  @IsOptional()
  @IsDate()
  birth_date: Date | undefined;

  @IsOptional()
  @IsDate()
  death_date: Date | undefined;

  @IsNumber()
  keluarga_id: number;

  @IsBoolean()
  is_kepala_keluarga: boolean = false;
}
