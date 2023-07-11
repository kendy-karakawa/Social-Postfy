import { Body, Controller, Post } from '@nestjs/common';
import { SigninService } from './signin.service';
import { SignInDTO } from './dto/signin.dto';

@Controller('signin')
export class SigninController {
  constructor(private readonly signinService: SigninService) {}

  @Post()
  signIn(@Body() body: SignInDTO){
    return this.signinService.signIn(body)
  }
}
