import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from '../../app.controller';
import { IdeaController } from '../idea/idea.controller';
import { PreauthMiddleware } from './middleware/preauth.middleware';

const AUTH_PROTECTED_CONTROLLERS = [IdeaController, AppController];

@Module({})
export class AuthModule implements NestModule {
  configure(
    consumer: MiddlewareConsumer,
  ) {
    consumer.apply(PreauthMiddleware)
      .forRoutes(...AUTH_PROTECTED_CONTROLLERS);
  }
}
