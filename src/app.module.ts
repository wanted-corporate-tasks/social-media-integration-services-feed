import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { StatisticsModule } from './statistics/statistics.module';

@Module({
  imports: [UserModule, PostModule, StatisticsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
