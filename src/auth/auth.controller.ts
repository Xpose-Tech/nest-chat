import { Body, Controller, Inject, Post } from '@nestjs/common';
import { IUserService } from 'src/user/user.interface';
import { Routes, Services } from 'src/utils/constants';
import { IAuthService } from './auth.interface';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(Services.AUTH) private authService: IAuthService,
    @Inject(Services.USER) private userSevice: IUserService,
  ) {}

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    this.userSevice.createUser(createUserDto);
  }

  //   @Post('login')
  //   login() {}

  //   @Get('status')
  //   status() {}

  //   @Post('logout')
  //   logout() {}
}
