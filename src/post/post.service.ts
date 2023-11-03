import { PostDao } from './models/post.dao';
import { Injectable } from '@nestjs/common';
import { PostListDto } from './dto/post-list.dto';
import { HashtagService } from 'src/hashtag/hashtag.service';

@Injectable()
export class PostService {
  constructor(
    private readonly postDao: PostDao,
    private readonly hashtagService: HashtagService,
  ) {}

  async findPostList(findOptions: PostListDto) {
    const { hashtag, type, orderBy, sort, searchBy, search, pageCount, page } = findOptions;

    const hashtagId = await this.hashtagService.findOneHashtagId(hashtag);

    // 등록된 해시태그가 아니라면 게시글이 존재하지 않음
    if (hashtagId) return [];

    await this.postDao.findMany(hashtagId, type, orderBy, sort, searchBy, search, pageCount, page);
  }
}
