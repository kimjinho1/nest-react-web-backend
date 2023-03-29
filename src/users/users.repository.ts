import { Repository } from 'typeorm';
import { CustomRepository } from './custom-repository/typeorm-ex.decorator';
import { User } from './entity/user.entity';

@CustomRepository(User)
export class UsersRepository extends Repository<User> {}
