import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './models/post.entity';
import { HashTagModule } from 'src/hashtag/hashtag.module';
import { PostDao } from './models/post.dao';
import { PostHashtag } from './dto/post-hashtag.entity';
import { Hashtag } from './dto/hashtag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Hashtag, PostHashtag]), HashTagModule],
  controllers: [PostController],
  providers: [PostService, PostDao],
})
export class PostModule {}
