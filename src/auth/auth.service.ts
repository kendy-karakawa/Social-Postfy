import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/user/repository.ts/user.repository';
import { AuthSignInDTO } from './dto/auth-signin.dto';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly JWTService: JwtService,
  ) {}

  async signin({ email, password }: AuthSignInDTO) {
    const user = await this.userRepository.findUserByEmail(email);
    if (!user) throw new UnauthorizedException('Email or password invalid');

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword)
      throw new UnauthorizedException('Email or password invalid');

    return this.createToken(user);
  }

  createToken(user: User){
    const token = this.JWTService.sign(
        {
          name: user.name,
          email: user.email,
        },
        {
          expiresIn: '7 days',
          subject: String(user.id),
        },
      );
  
      return { token };
    }
  
    checkToken(token: string) {
        try {
          const data = this.JWTService.verify(token);
    
          return data;
        } catch (error) {
          console.log(error);
          throw new BadRequestException(error);
        }
      }
}
