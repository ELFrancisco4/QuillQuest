import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return { msg: 'I have logged in' };
  }

  signUp() {
    return { msg: 'I have signed in' };
  }
}
