import { Controller, Inject } from '@nestjs/common';
import { Routes, Services } from 'src/utils/type';
import { IAuthService } from './auth.interface';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(@Inject(Services.AUTH) private authService: IAuthService) {}
}
