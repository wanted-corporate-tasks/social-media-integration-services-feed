import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { EnvironmentModule } from 'src/environment/environment.module';
import { ConfigService } from '@nestjs/config';
import { JwtConfig } from 'src/environment/values/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BadPassword } from './entities/bad-password.entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([BadPassword]),
    JwtModule.registerAsync({
      imports: [EnvironmentModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const { JWT_EXPIRE_TIME, JWT_SECRET_KEY }: JwtConfig = configService.get('JWT');

        return { secret: JWT_SECRET_KEY, signOptions: { expiresIn: JWT_EXPIRE_TIME } };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
