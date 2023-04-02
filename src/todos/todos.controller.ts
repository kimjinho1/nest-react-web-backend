import { Controller, Get, Request } from '@nestjs/common';
import { Public } from 'src/auth/auth.guard';
import { UsersService } from 'src/users/users.service';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async getAllTodos(@Request() req): Promise<string[]> {
    return this.todosService.getAllTodos(req.user.userId);
  }
}
