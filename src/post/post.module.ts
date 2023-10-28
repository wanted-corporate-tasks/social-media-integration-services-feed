import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './models/post.entity';
import { HashTagModule } from 'src/hashtag/hashtag.module';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), HashTagModule],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
