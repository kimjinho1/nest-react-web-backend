import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: UsersRepository,
  ) {}

  // 모든 유저 정보 받기
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // id로 유저 찾기
  async findOne(id: number): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with Id ${id} not found`);
    }
    return user;
  }

  // 회원 가입
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { userId, userPassword, userName } = createUserDto;
    const user = this.userRepository.create({
      userId,
      userPassword,
      userName,
    });
    console.log(user);
    await this.userRepository.save(user);
    return user;
  }

  // 계정 탈퇴
  async deleteUser(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with Id ${id} not found`);
    }
  }
}
