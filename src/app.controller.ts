import { Controller, Get, Post, Body, Delete, Param} from '@nestjs/common';
import { Screw } from './screw.entity';
import { ScrewService } from './app.service';

@Controller('screws')
export class ScrewController {
  constructor(private readonly screwService: ScrewService) {}

  @Get()
  findAll(): Promise<Screw[]> {
    return this.screwService.findAll();
  }

  @Post()
  create(@Body() screw: Screw): Promise<void> {
    return this.screwService.create(screw);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.screwService.delete(id);
  }
}

