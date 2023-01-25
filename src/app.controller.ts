import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/AuthenticatedGuard';
import { JwtAuthGuard } from './auth/jwt.auth.guard';
import { LocalAuthGard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }
  @UseGuards(JwtAuthGuard)
  @Post('login')
  login(@Request() req): any{
      return this.authService.login(req.user);
  }
}
