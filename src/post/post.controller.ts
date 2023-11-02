import { Controller, Get, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { PostListDto } from './dto/post-list.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  // 게시물 목록
  @Get()
  async findPostList(@Query() findOptions: PostListDto) {
    // await this.postService.
  }

  @Get('test')
  async test() {
    return await this.postService.test();
  }
  // 게시물 상세
  // 게시물 좋아요
  // 게시물 공유
  // 게시물 통계
}
