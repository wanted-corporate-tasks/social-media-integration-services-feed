import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './models/post.entity';
import { Repository } from 'typeorm';
import { PostListDto } from './dto/post-list.dto';
import { HashtagService } from 'src/hashtag/hashtag.service';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
    private readonly hashtagService: HashtagService,
  ) {}
  async test() {
    const newPost = this.postRepository.create({
      contentId: 'a1s',
      type: 'facebook',
      title: 'test1',
      content: 'tes1t',
      viewCount: 50,
      shareCount: 50,
      likeCount: 50,
      hashtags: 'name, age',
    });

    await this.postRepository.save(newPost);
  }
  async findPostList(findOptions: PostListDto) {
    const { hashtagId, type, orderBy, searchBy, search, pageCount, page } = findOptions;

    // 해시태그와 정확하게 일치하는 값
    // 게시글 필드의 type이 인스타, 페이스북 ... type이 지정되지 않았다면 전체로 검색
    // 정렬의 순서 지켜야함
    // 검색을 어디로 둘것인지
    // search는 search_by에서 해당 내용(search keyword)이 포함되어있는 게시글을 가져와야함

    await this.postRepository.createQueryBuilder();
    // 해쉬태그를 검색해서 번호를 알아낸다.
    // 해시태그를
  }
}
