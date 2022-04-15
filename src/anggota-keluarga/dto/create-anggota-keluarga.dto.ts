import {
  IsBoolean,
  IsDateString,
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
  @IsDateString()
  birth_date: string | undefined;

  @IsOptional()
  @IsDateString()
  death_date: string | undefined;

  @IsNumber()
  keluarga_id: number;

  @IsOptional()
  @IsBoolean()
  is_kepala_keluarga: boolean = false;
}
