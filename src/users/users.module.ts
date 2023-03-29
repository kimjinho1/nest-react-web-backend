import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { isStrongPassword } from 'class-validator';
import { TypeOrmExModule } from './custom-repository/typeorm-ex.module';
import { User } from './entity/user.entity';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmExModule.forCustomRepository([UsersRepository]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
