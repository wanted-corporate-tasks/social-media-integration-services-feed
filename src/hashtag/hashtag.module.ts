import { Module } from '@nestjs/common';
import { HashtagService } from './hashtag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hashtag } from './models/hashtag.entity';
import { PostHashtag } from './models/post-hashtag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hashtag, PostHashtag])],
  providers: [HashtagService],
  exports: [HashtagService],
})
export class HashTagModule {}
