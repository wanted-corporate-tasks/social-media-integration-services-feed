import { BaseEntity } from 'src/database/base.entity';
import { PostHashtag } from 'src/hashtag/models/post-hashtag.entity';
import { User } from 'src/user/models/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'post' })
export class Post extends BaseEntity {
  @Column({ comment: '외부 SNS에서 관리하는 고유 인식 값' })
  contentId: string;

  @Column({ comment: '외부 SNS의 유형' })
  type: 'facebook' | 'twitter' | 'instagram' | 'threads';

  @Column({ comment: '게시글 제목' })
  title: string;

  @Column()
  content: string;

  @Column()
  hashtags: string;

  @Column()
  viewCount: number;

  @Column()
  likeCount: number;

  @Column()
  shareCount: number;

  @Column({ name: 'user_id', type: 'bigint', unsigned: true, comment: '게시물 등록을 한 유저의 고유 값' })
  userId: string;

  @ManyToOne(() => User, user => user.post)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @OneToMany(() => PostHashtag, postHashtag => postHashtag.post, { cascade: true })
  postHashtag: PostHashtag[];
}
