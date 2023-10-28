import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { SignUpDto } from './dto/sign-up.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BadPassword } from './entities/bad-password.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
    @InjectRepository(BadPassword) private readonly badWordRepository: Repository<BadPassword>,
  ) {}

  async signUp(signUpDto: SignUpDto) {
    const user = await this.usersService.findOne(signUpDto.account);

    if (user) throw new BadRequestException('이미 사용중인 아이디입니다.');

    await this.hasBadPassword(signUpDto.password, signUpDto.email, signUpDto.account);
    await this.usersService.registerUser(signUpDto);
    // 이메일 인증코드 발송 개발중 - 개발 완료까지 코드 발송 안함
  }

  async hasBadPassword(password: string, email: string, account: string) {
    const badWords = (await this.badWordRepository.find()).map(item => item.name);

    badWords.push(account);
    badWords.push(email.split('@')[0]);

    const isIncludeBadWord = badWords.some(badWord => password.includes(badWord));

    if (isIncludeBadWord) throw new BadRequestException('사용할 수 없는 비밀번호입니다.');
  }
}
