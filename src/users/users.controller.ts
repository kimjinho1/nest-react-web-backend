import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUser(): Promise<User[]> {
    return await this.usersService.getAllUser();
  }

  @Get('/:id')
  async getUserById(@Param('id') userId: number): Promise<User> {
    return await this.usersService.getUserById(userId);
  }

  @Post()
  async signUp(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') userId: number): Promise<void> {
    // return을 안하면 insomnia에서 에러가 안오는 것 같다
    return this.usersService.deleteUser(userId);
  }

  @Patch('/:id')
  async updateUser(
    @Param('id') userId: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<void> {
    return this.usersService.updateUser(userId, updateUserDto);
  }
}
