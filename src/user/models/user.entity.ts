import { SoftDeleteEntity } from 'src/database/base.entity';
import { BeforeInsert, Column, Entity } from 'typeorm';
import { hashSync } from 'bcrypt';

@Entity({ name: 'user' })
export class User extends SoftDeleteEntity {
  @Column({ unique: true, comment: '유저의 로그인에 사용되는 계정' })
  account: string;

  @Column({ comment: '유저 이메일 - 중복 가능' })
  email: string;

  @Column({ comment: '유저의 로그인에 사용되는 비밀번호' })
  password: string;

  @Column({ comment: '이메일 인증 코드 - 6자리의 랜덤한 코드' })
  code: string;

  @Column({ name: 'is_active', comment: '이메일 인증 코드 인증 여부에 따른 계정 활동 가능 여부' })
  isActive: boolean;

  @Column({ name: 'latest_password', comment: '비밀번호 재설정 시 최근에 사용한 비밀번호는 사용 할 수 없음' })
  latestPassword: string;

  @BeforeInsert()
  private beforeInsert() {
    this.password = hashSync(this.password, 10);
  }
}
