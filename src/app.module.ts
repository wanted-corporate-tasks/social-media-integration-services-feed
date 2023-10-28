import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { EnvironmentModule } from './environment/environment.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [EnvironmentModule, DatabaseModule, UserModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
