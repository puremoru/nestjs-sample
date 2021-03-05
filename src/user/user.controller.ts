import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getUsers(): Promise<UserModel[]> {
        return this.userService.users();
    }
    
    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<UserModel> {
        return this.userService.user({ id: Number(id) });
    }

    @Post()
    async createUser(
        @Body() userData: { email: string; name?: string; },
    ): Promise<UserModel> {
        console.log(userData)
        return this.userService.createUser(userData);
    }
}
