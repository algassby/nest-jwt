import { Injectable } from '@nestjs/common';
export type User = {
    id: number,
    name: string,
    username: string,
    passport: string

}
@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'BARRY',
            username: 'Algassby',
            passport: '123456'
        },
        {
            id: 2,
            name: 'BARRIO',
            username: 'barrio',
            passport: '123456'
        }
    ]
    constructor(){}

    async findOne(username: string): Promise<User> | undefined{
        return this.users.find(user=> user.username === username);
    }
}
