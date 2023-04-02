import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './boards.repository';
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
}
