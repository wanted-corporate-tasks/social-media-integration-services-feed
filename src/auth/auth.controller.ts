import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';

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
  @Post('signIn')
  async signIn(@Body() signUpDto: SignInDto) {
    const data = await this.authService.signIn(signUpDto);

    return { status: true, message: '로그인에 성공했습니다.', data };
  }

  // 이메일 인증 - 개발중
  @Post()
  async approveRegistration() {}

  // 비밀번호 변경 - 개발중
  @Post()
  async changePassword() {}
}
