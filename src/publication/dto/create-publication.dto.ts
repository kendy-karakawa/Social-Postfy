import { IsBoolean, IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreatePublicationDTO {
  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsDate()
  dateToPublish: string

  @IsBoolean()
  published: false

  @IsString()
  @IsNotEmpty()
  socialMedia: string
}
