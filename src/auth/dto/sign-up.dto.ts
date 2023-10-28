import { IsEmail, Matches } from 'class-validator';

export class SignUpDto {
  @Matches(/^[a-z]+$/, { message: '소문자 영어로만 구성해주세요.' })
  account: string;

  @IsEmail()
  email: string;

  @Matches(/^(?!.*(.)\1{2,})(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{10,}$/, { message: '사용할 수 없는 비밀번호입니다.' })
  password: string;
}
