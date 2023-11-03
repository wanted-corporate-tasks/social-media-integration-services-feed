import { Injectable } from '@nestjs/common';
import { Hashtag } from 'src/post/dto/hashtag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostHashtag } from '../post/dto/post-hashtag.entity';

@Injectable()
export class HashtagService {
  constructor(
    @InjectRepository(Hashtag) private readonly hashtagRepository: Repository<Hashtag>,
    @InjectRepository(PostHashtag) private readonly postHashtagRepository: Repository<PostHashtag>,
  ) {}

  async findOneHashtagId(name: string) {
    return (await this.hashtagRepository.findOne({ where: { name } })).id;
  }
  async create(name: string) {
    const newHashtag = this.hashtagRepository.create({ name });

    await this.hashtagRepository.save(newHashtag);

    return newHashtag;
  }
}
