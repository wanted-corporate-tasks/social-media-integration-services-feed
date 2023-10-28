import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // 회원가입
  @Post('signUp')
  @HttpCode(201)
  async signUp(@Body() signUpDto: SignUpDto) {
    await this.authService.signUp(signUpDto);

    return { status: true, message: '회원 등록에 성공하셨습니다.' };
  }

  // 로그인
  @Post()
  async signIn() {}

  // 이메일 인증
  @Post()
  async approveRegistration() {}

  // 비밀번호 변경 - jwt
  // 기존 pw, 변경할 pw, 더블체크 pw
  @Post()
  async changePassword() {}
}
