import { Post } from 'src/post/models/post.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Hashtag } from './hashtag.entity';

@Entity({ name: 'post-hashtag' })
export class PostHashtag {
  @PrimaryColumn({ name: 'hashtag_id', type: 'bigint', unsigned: true })
  hashtagId: number;

  @ManyToOne(() => Hashtag, hashtag => hashtag.postHashtag, { onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'hashtag_id' })
  hashtag: Hashtag;

  @PrimaryColumn({ name: 'post_id', type: 'bigint', unsigned: true })
  postId: number;

  @ManyToOne(() => Post, post => post.postHashtag, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'post_id' })
  post: Post;
}
