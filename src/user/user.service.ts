import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}
  async findOne(account: string, isNeedPassword = false) {
    const user = await this.userRepository.findOne({ where: { account } });

    if (user && !isNeedPassword) {
      delete user.password;
      delete user.latestPassword;
    }

    return user;
  }

  async registerUser(user: Partial<User>) {
    // 이메일 인증코드 발송 개발중 - 개발 완료까지 인증 여부 활성화
    await this.userRepository.save(this.userRepository.create(user));
  }
}
