import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { hashPassword } from 'src/utils/helpers';
import { CreateUserDetail } from 'src/utils/types';
import { Repository } from 'typeorm';
import { IUserService } from './user.interface';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(userDetail: CreateUserDetail) {
    const existingUser = await this.userRepository.findOneBy({
      email: userDetail.email,
    });

    if (existingUser) {
      throw new HttpException('The user already exist', HttpStatus.CONFLICT);
    }

    const password = await hashPassword(userDetail.password);

    const newUser = await this.userRepository.create({
      ...userDetail,
      password,
    });

    return this.userRepository.save(newUser);
  }
}
