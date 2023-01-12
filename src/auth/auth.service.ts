import { Injectable } from '@nestjs/common';
import { User, UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService){

    }
    async validateUser(username: string, passport: string): Promise<any> {
        const user = await this.userService.findOne(username);
        if(user && user.passport === passport){
            const {username, passport, ...rest} = user;
            return rest;
        }
        return null;
    }
}
