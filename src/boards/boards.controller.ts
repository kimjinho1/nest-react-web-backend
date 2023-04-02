import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './entity/board.entity';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  async getAllBoard(): Promise<Board[]> {
    return await this.boardsService.getAllBoard();
  }
}
