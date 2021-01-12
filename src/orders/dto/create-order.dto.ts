import { IsNotEmpty, IsEmail } from 'class-validator'

export class CreateOrderDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  street: string

  @IsNotEmpty()
  city: string

  @IsNotEmpty()
  country: string

  @IsNotEmpty()
  zip: string

  @IsNotEmpty()
  card: string

  @IsNotEmpty()
  date: string

  @IsNotEmpty()
  cvc: string
}
