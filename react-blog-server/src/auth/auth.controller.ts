import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Post, Body } from '@nestjs/common/decorators';
import { LoginDto, SignupDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() dto: LoginDto) {
    console.log(dto);
    return this.authService.login();
  }
  @Post('signup')
  signUp(@Body() dto: SignupDto) {
    console.log(dto);
    return this.authService.signUp();
  }
}
