import { IsString } from 'class-validator';
import ValidateConfig from '../environment.validator';

export class JwtConfig {
  @IsString()
  JWT_SECRET_KEY: string;

  @IsString()
  JWT_EXPIRE_TIME: string;
}

export default () => {
  const env = {
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    JWT_EXPIRE_TIME: process.env.JWT_EXPIRE_TIME,
  };

  ValidateConfig(env, JwtConfig);

  return { JWT: env };
};
