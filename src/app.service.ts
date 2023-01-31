import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Screw } from './screw.entity';

@Injectable()
export class ScrewService {
  constructor(
    @InjectRepository(Screw)
    private readonly screwRepository: Repository<Screw>,
  ) {}

  async findAll(): Promise<Screw[]> {
    return await this.screwRepository.find();
  }

  async create(screw: Screw): Promise<void> {
    await this.screwRepository.save(screw);
  }
}

