import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  MinLength,
} from 'class-validator';

export class CreateAccountDTO {
  @IsString({ message: 'El nombre debe ser un texto válido' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @MinLength(3, { message: 'El nombre es muy corto' })
  name: string;

  @IsEmail({}, { message: 'El formato del correo electrónico no es válido' })
  @IsNotEmpty({ message: 'El correo es obligatorio' })
  email: string;

  @IsPhoneNumber(null, {
    message: 'Formato de teléfono no válido',
  })
  @IsNotEmpty({ message: 'El teléfono es obligatorio' })
  phone: string;
}
