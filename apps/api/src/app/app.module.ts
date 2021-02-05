import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdeaModule } from './modules/idea/idea.module';
import { Idea } from './modules/idea/entities/idea.entity';
import { AuthModule } from './modules/auth/auth.module';

const POSTGRES_HOST = process.env.POSTGRES_HOST || 'localhost';
const POSTGRES_PORT = +(process.env.POSTGRES_PORT || 5432);
const POSTGRES_DB = process.env.POSTGRES_DB || 'idea_incubator';
const POSTGRES_USER = process.env.POSTGRES_USER || 'postgres';
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || 'mysecretpassword';

export const APP_MODULE_CONFIG_IMPORTS = [
  ConfigModule.forRoot({
    envFilePath: '../../../../local.env',
    isGlobal: true,
  }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: POSTGRES_HOST,
    port: POSTGRES_PORT,
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    entities: [
      Idea
    ],
    synchronize: true,
  }),
];

export const APP_MODULE_APPLICATION_IMPORTS = [
  IdeaModule,
];

@Module({
  imports: [
    ...APP_MODULE_CONFIG_IMPORTS,
    ...APP_MODULE_APPLICATION_IMPORTS,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule { }
