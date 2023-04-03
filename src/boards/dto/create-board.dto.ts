import { IsString } from 'class-validator';

export class CreateBoardDto {
  @IsString()
  readonly userId: string;

  @IsString()
  readonly userName: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly thumbnail: string;

  @IsString()
  readonly date: string;

  @IsString()
  readonly content: string;
}
