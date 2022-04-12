import {
  IsBoolean,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  Length,
  ValidationArguments,
} from 'class-validator';

export class CreateKeluargaDto {
  @IsString()
  @IsNumberString(null, { message: isNumberStringMessage() })
  no_induk: string;

  @IsOptional()
  @IsNumberString(null, { message: isNumberStringMessage() })
  @Length(16, 16, { message: lengthConstraintMessage(16) })
  no_kk: string = '';

  @IsOptional()
  @IsNumberString(null, { message: isNumberStringMessage() })
  @Length(16, 16, { message: lengthConstraintMessage(16) })
  no_nik: string = '';

  @IsOptional()
  @IsString()
  address: string = '';

  @IsOptional()
  @IsBoolean()
  is_registered: boolean = false;

  @IsNumber()
  kepala_keluarga_id: number;
}

/**
 * Helper function to generate error message
 *
 * @private
 */
function isNumberStringMessage() {
  return (arg: ValidationArguments) => `${arg.property} harus bernilai numeric`;
}

/**
 * Helper function to generate error message
 *
 * @private
 */
function lengthConstraintMessage(length: number) {
  return (arg: ValidationArguments) =>
    `${arg.property} harus memiliki ${length} digit karakter`;
}
