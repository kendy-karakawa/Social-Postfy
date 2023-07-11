import { Injectable } from '@nestjs/common';
import { SignInDTO } from './dto/signin.dto';

@Injectable()
export class SigninService {
  
   signIn(body: SignInDTO) {
    const {email, password} = body
  }
  
}
