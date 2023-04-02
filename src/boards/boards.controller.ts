import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entity/board.entity';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  async getAllBoard(): Promise<Board[]> {
    return await this.boardsService.getAllBoard();
  }

  @Post()
  async addBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return await this.boardsService.addBoard(createBoardDto);
  }

  @Delete('/:id')
  async deleteBoard(@Param('id') boardId: number): Promise<void> {
    return this.boardsService.deleteBoard(boardId);
  }

  @Patch('/:id')
  async updateBoard(
    @Param('id') boardId: number,
    @Body() updateBoardDto: UpdateBoardDto,
  ): Promise<void> {
    return this.boardsService.updateBoard(boardId, updateBoardDto);
  }
}
