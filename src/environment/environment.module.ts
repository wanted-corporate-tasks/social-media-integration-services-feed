import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from './values/app';
import databaseConfig from './values/database';
import jwtConfig from './values/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.${process.env.NODE_ENV}.env`,
      load: [appConfig, databaseConfig, jwtConfig],
    }),
  ],
})
export class EnvironmentModule {}
