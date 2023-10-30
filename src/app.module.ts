import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { EnvironmentModule } from './environment/environment.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [EnvironmentModule, DatabaseModule, AuthModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
