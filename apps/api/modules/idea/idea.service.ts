import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIdeaDto } from './dto/create-idea.dto';
import { UpdateIdeaDto } from './dto/update-idea.dto';
import { Idea } from './entities/idea.entity';

@Injectable()
export class IdeaService {
  constructor(
    @InjectRepository(Idea)
    private ideasRepository: Repository<Idea>,
  ) { }

  create(createIdeaDto: CreateIdeaDto) {
    const newIdea = this.ideasRepository.create(createIdeaDto);
    return this.ideasRepository.save(newIdea);
  }

  findAll() {
    return this.ideasRepository.find();
  }

  findOne(id: string) {
    return this.ideasRepository.findOne(id);
  }

  async update(id: string, updateIdeaDto: UpdateIdeaDto) {
    const oldIdea = await this.findOne(id);
    const updatedIdea = this.ideasRepository.merge(oldIdea, updateIdeaDto);
    return this.ideasRepository.save(updatedIdea);
  }

  async remove(id: string) {
    return await this.ideasRepository.delete(id);
  }
}
