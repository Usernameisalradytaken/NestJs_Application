import {
  Module,
  RequestMethod,
  MiddlewareConsumer,
  NestModule,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './api/auth/auth.controller';
import { TeamModule } from './Models/Team/team.module';
import { TaskController } from './api/task/task.controller';
import { TaskModule } from './Models/Task/task.module';
import { TeamController } from './api/team/team.controller';
import { TeamMemberModule } from './Models/TeamMember/teamMember.module';
import { url } from 'inspector';
import { MongoService } from './mongo.service';
import { AuthMiddleware } from './jwt.middleware';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env`,
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      '<<MONGODB URI>>',
    ),
    TeamModule,
    TaskModule,
    TeamMemberModule,
  ],
  controllers: [AppController, AuthController, TaskController, TeamController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(TaskController, TeamController);
  }

  // configure(consumer: MiddlewareConsumer, authMiddle : AuthMiddleware) {
  //   consumer
  //     .apply(LoggerMiddleware)
  //     .forRoutes({ path: 'task/create', method: RequestMethod.ALL });
  // }
}
