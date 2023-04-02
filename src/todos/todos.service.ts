import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TodosService {
  constructor(private usersService: UsersService) {}

  async getAllTodos(userId: string): Promise<string[]> {
    const user = await this.usersService.getUserByUserId(userId);
    return user.todos;
  }
}
