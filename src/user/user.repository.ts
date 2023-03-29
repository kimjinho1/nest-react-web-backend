import { Repository } from 'typeorm';
import { CustomRepository } from './custom-repository/typeorm-ex.decorator';
import { User } from './entity/user.entity';

@CustomRepository(User)
export class PhotoRepository extends Repository<User> {
  public async getAllPhoto() {
    const query = this.createQueryBuilder('photo').where(
      'photo.isPublished = :isPublished',
      { isPublished: true },
    );
    const photos = await query.getMany();
    return photos;
  }
}
