import { BaseEntity } from 'src/database/base.entity';
import { Post } from 'src/post/models/post.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @Column({ unique: true })
  account: string;

  @Column()
  email: string;

  @Column({ comment: '유저 비밀번호' })
  password: string;

  @Column({ comment: '이메일 인증 코드 - 6자리의 랜덤한 코드' })
  code: string;

  @Column({ comment: '이메일 인증 코드 인증 여부에 따른 계정 활동 가능 여부' })
  isActive: string;

  @Column({ comment: '비밀번호 재설정 시 최근에 사용한 비밀번호는 사용 할 수 없음' })
  latestPassword: string;

  @OneToMany(() => Post, post => post.user)
  post: Post[];
}
