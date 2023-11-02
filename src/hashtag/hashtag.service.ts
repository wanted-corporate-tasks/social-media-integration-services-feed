import { Injectable } from '@nestjs/common';
import { Hashtag } from 'src/hashtag/models/hashtag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostHashtag } from './models/post-hashtag.entity';

@Injectable()
export class HashtagService {
  constructor(
    @InjectRepository(Hashtag) private readonly hashtagRepository: Repository<Hashtag>,
    @InjectRepository(PostHashtag) private readonly postHashtagRepository: Repository<PostHashtag>,
  ) {}
}
