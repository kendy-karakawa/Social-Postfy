import { Body, Controller, Post } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDTO } from './dto/create-publication.dto';

@Controller('publication')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @Post()
  create(@Body() body: CreatePublicationDTO){
    return this.publicationService.create(body)
  }
}
