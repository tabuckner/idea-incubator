import { Module } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaController } from './idea.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Idea } from './entities/idea.entity';

@Module({
  controllers: [IdeaController],
  imports: [
    TypeOrmModule.forFeature([Idea])
  ],
  providers: [IdeaService]
})
export class IdeaModule {}
