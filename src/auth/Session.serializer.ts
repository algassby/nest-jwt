import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import {UsersService} from '../users/users.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly usersService: UsersService) {
    super();
  }

  serializeUser(user: any, done: (err: Error, user: any)=> void): any {
    done(null, user.id);
  }

  deserializeUser(payload: any, done: (err: Error, payload: any)=> void) {
    const user = this.usersService.findById(payload.id);
    done(null, user);
  }
}