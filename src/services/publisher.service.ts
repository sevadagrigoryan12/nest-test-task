import { Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PublisherDocument, Publisher } from '../schemas';
import { IPublisher } from '../interfaces';
import { CreatePublisherRequest } from '../models';

@Injectable()
export class PublisherService {
  private Logger: Logger = new Logger(PublisherService.name);
  constructor(@InjectModel(Publisher.name) private PublisherModel: Model<PublisherDocument>) {}

  async findAll(): Promise<IPublisher[]> {
    return this.PublisherModel.find();
  }

  async createNewPublisher(publisher: CreatePublisherRequest): Promise<void> {
    await this.PublisherModel.create(publisher);
  }
}
