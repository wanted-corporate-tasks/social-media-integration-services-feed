import { IsEmail, Matches } from 'class-validator';

export class SignUpDto {
  @Matches(/^[a-z]+$/, { message: 'Please make it composed of only small letters in English' })
  account: string;

  @IsEmail()
  email: string;

  @Matches(/^(?!.*(.)\1{2,})(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{10,}$/, {
    message:
      'The string must be at least 10 characters long and must include at least one of each: a digit, a letter, a special character or an underscore. Additionally, the same character cannot appear consecutively three times or more.',
  })
  password: string;
}
