import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/:id')
  async findOne(@Param('id') userId: number): Promise<User> {
    return await this.userService.findOne(userId);
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') userId: number): Promise<void> {
    // return을 안하면 insomnia에서 에러가 안오는 것 같다
    return this.userService.deleteUser(userId);
  }
}
