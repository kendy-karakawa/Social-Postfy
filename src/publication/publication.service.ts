import { Injectable } from '@nestjs/common';
import { CreatePublicationDTO } from './dto/create-publication.dto';
import { Publication } from './entity/publication';
import { User } from '@prisma/client';

@Injectable()
export class PublicationService {
  create(body: CreatePublicationDTO, user: User) {
    const {image, title, text, dateToPublish, published, socialMedia} = body
    
    const publication = new Publication(image, title, text, dateToPublish, published, socialMedia)
    return publication
  }

}
