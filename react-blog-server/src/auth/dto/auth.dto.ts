import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export interface SignupDto {
  username: string;
  password: string;
  email: string;
  interests: string[];
}
