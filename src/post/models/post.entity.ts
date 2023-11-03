import { BaseEntity } from 'src/database/base.entity';
import { PostHashtag } from 'src/post/dto/post-hashtag.entity';
import { Column, Entity, OneToMany } from 'typeorm';

export type SnsType = 'facebook' | 'twitter' | 'instagram' | 'threads';

@Entity({ name: 'post' })
export class Post extends BaseEntity {
  @Column({ name: 'content_id', comment: '외부 SNS에서 관리하는 고유 인식 값' })
  contentId: string;

  @Column({ comment: '외부 SNS의 유형' })
  type: SnsType;

  @Column({ comment: '외부 SNS의 게시글 제목' })
  title: string;

  @Column({ comment: '외부 SNS의 게시글 내용' })
  content: string;

  @Column({ name: 'view_count', comment: 'Feed에서 조회 수 기록' })
  viewCount: number;

  @Column({ name: 'like_count', comment: 'Feed에서 좋아요 수 기록' })
  likeCount: number;

  @Column({ name: 'share_count', comment: 'Feed에서 공유 수 기록' })
  shareCount: number;

  @Column({ comment: 'Join 사용없이 가져오기 위한 hashtag (hashtag Table과 같이 저장됨)' })
  hashtags: string;

  @OneToMany(() => PostHashtag, postHashtag => postHashtag.post, { cascade: true })
  postHashtag: PostHashtag[];
}
