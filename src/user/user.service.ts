import { Injectable } from '@nestjs/common';
import { CreateUserDetail } from 'src/utils/types';
import { IUserService } from './user.interface';

@Injectable()
export class UserService implements IUserService {
  createUser(userDetail: CreateUserDetail) {
    console.log('hello from user service', userDetail);
  }
}
