import { ConflictException, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './entity/User';
import { UserRepository } from './repository.ts/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(data: CreateUserDTO) {
    const hashPassword = bcrypt.hashSync(data.password, 10)
    const user = await this.userRepository.findUserByEmail(data.email)
    if(user) throw new ConflictException('Email already exists')
    await this.userRepository.addUser({...data, password: hashPassword})
    return 'Ok';
  }

  async findUserById(id: number) {
    const user = await this.userRepository.findUserById(id)
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return user;
  }
}
