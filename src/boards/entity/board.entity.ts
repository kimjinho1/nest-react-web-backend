import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  userName: string;

  @Column()
  title: string;

  @Column()
  thumbnail: string;

  @Column()
  date: string;

  @Column()
  content: string;
}
