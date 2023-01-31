import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { Screw } from './screw.entity';

@Injectable()
export class ScrewService {
  createOrder(order: any) {
    throw new Error('Method not implemented.');
  }
  findOne(screwId: number) {
    throw new Error('Method not implemented.');
  }
  update(screwId: number, screw: any) {
    throw new Error('Method not implemented.');
  }
  placeOrder(screwId: number, order: Order): import("./order.entity").Order | PromiseLike<import("./order.entity").Order> {
    throw new Error('Method not implemented.');
  }
  delete(id: number) {
    throw new Error('Method not implemented.');
  }
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

