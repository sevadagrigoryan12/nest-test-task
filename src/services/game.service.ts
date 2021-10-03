import { Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GameDocument, Game } from '../schemas';
import { IGame } from '../interfaces';
import { CreateGameRequest } from '../models';
import { calculatePastDate } from 'src/utils';

@Injectable()
export class GameService {
  private Logger: Logger = new Logger(GameService.name);
  constructor(@InjectModel(Game.name) private gameModel: Model<GameDocument>) {}

  async findAll(): Promise<IGame[]> {
    return this.gameModel.find();
  }

  async findPublisher(gameId: string) {
    return this.gameModel
      .findById(gameId)
      .select('publisher')
      .populate('publisher');
  }

  async createNewGame(game: CreateGameRequest): Promise<void> {
    await this.gameModel.create({ ...game, releaseDate: new Date(game.releaseDate) });
  }

  async processForReleaseDates() {
    await this.gameModel.deleteMany({
      releaseDate: { $lt: calculatePastDate(18) },
    });
    await this.gameModel.updateMany(
      {
        releaseDate: { $gt: calculatePastDate(18), $lt: calculatePastDate(12) },
      },
      {
        $mul: { price: 0.8 },
      },
    );
  }
}
