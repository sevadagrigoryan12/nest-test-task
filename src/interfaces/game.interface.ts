import { IPublisher } from './publisher.interface';

export interface IGame {
  id?: string;
  title: string;
  price: number;
  publisher: IPublisher;
  tags: string[];
  releaseDate: Date;
}
