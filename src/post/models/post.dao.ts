import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { OrderBy, SearchBy, SortBy } from '../dto/post-list.dto';

@Injectable()
export class PostDao {
  constructor(@InjectRepository(Post) private readonly postRepository: Repository<Post>) {}

  async findMany(
    hashtagId: number,
    type: string | string[],
    orderBy: OrderBy,
    sort: SortBy,
    searchBy: SearchBy,
    search: string,
    pageCount: number,
    page: number,
  ) {
    await this.postRepository
      .createQueryBuilder('P')
      .innerJoin('P.post_hashtag', 'PH', 'PH.id = PH.postId AND PH.hashtagId = :hashtagId', { hashtagId })
      .where(``);
    // 해시태그와 정확하게 일치하는 값
    // 게시글 필드의 type이 인스타, 페이스북 ... type이 지정되지 않았다면 전체로 검색
    // 정렬의 순서 지켜야함
    // 검색을 어디로 둘것인지
    // search는 search_by에서 해당 내용(search keyword)이 포함되어있는 게시글을 가져와야함

    const queryBuilder = this.postRepository.createQueryBuilder();

    await queryBuilder.getMany();
    // 해쉬태그를 검색해서 번호를 알아낸다.
    // 해시태그를
  }
}

// 메인페이지는 메인정보들을 두고
// 메인페이지 하위는 스토리를 남기도록 하며 관리가 되도록 한다.
