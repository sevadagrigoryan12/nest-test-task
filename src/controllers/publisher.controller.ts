import { Controller, Logger, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { PublisherService } from '../services/publisher.service';
import { IPublisher } from '../interfaces';
import { CreatePublisherRequest } from '../models';

@Controller('publishers')
@ApiTags('Publisher')
export class PublisherController {
  private Logger: Logger = new Logger(PublisherController.name);
  constructor(private readonly publisherService: PublisherService) {}

  @Get()
  @ApiOperation({ summary: 'Fetch all Publishers' })
  @ApiResponse({ status: 200, description: 'Publishers are gotten' })
  async getPublishers(): Promise<IPublisher[]> {
    return this.publisherService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create new Publisher' })
  @ApiResponse({ status: 200, description: 'Publisher is created' })
  async createPublishers(@Body() createParams: CreatePublisherRequest): Promise<void> {
    await this.publisherService.createNewPublisher(createParams);
  }
}
