import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

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

  @IsString()
  dateToPublish: string

  @IsBoolean()
  published: false

  @IsString()
  @IsNotEmpty()
  socialMedia: string
}
