import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('protected')
  getHello(): string {
    return this.appService.getHello();
  }
  @UseGuards(LocalAuthGard)
  @Post('')
  login(): any{

  }
}