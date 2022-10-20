import { CreateUserDetail } from 'src/utils/types';

export interface IUserService {
  createUser(userDetail: CreateUserDetail);
}
