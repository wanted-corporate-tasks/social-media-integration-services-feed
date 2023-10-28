import { BaseEntity } from 'src/database/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { PostHashtag } from './post-hashtag.entity';

@Entity({ name: 'hashtag' })
export class Hashtag extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => PostHashtag, postHashtag => postHashtag.hashtag, { onUpdate: 'CASCADE' })
  postHashtag: PostHashtag[];
}
