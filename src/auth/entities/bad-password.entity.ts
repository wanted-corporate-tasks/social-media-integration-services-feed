import { CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'bad_password' })
export class BadPassword {
  @PrimaryColumn({ comment: '자주 사용되는 비밀번호 이름' })
  name: string;

  @CreateDateColumn({ name: 'created_at', select: false })
  createdAt!: Date;
}
