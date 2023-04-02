import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './boards.repository';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entity/board.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: BoardRepository,
  ) {}

  async getAllBoard(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  async addBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const board = this.boardRepository.create(createBoardDto);
    await this.boardRepository.save(board);
    return board;
  }

  async deleteBoard(boardId: number): Promise<void> {
    const result = await this.boardRepository.delete(boardId);
    if (result.affected === 0) {
      throw new NotFoundException(`Board with Id ${boardId} not found`);
    }
  }

  async updateBoard(
    boardId: number,
    updateBoardDto: UpdateBoardDto,
  ): Promise<void> {
    this.boardRepository.update(boardId, updateBoardDto);
  }
}
