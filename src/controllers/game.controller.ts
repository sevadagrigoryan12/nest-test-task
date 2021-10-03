import { Controller, Logger, Get, Post, Body, Query, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { GameService } from '../services/game.service';
import { IGame } from '../interfaces';
import { CreateGameRequest } from '../models';

@Controller('games')
@ApiTags('Game')
export class GameController {
  private Logger: Logger = new Logger(GameController.name);
  constructor(private readonly gameService: GameService) {}

  @Get()
  @ApiOperation({ summary: 'Fetch all games' })
  @ApiResponse({ status: 200, description: 'Games are gotten' })
  async getGames(): Promise<IGame[]> {
    return this.gameService.findAll();
  }

  @Get('/:id/publisher')
  @ApiOperation({ summary: 'Fetch publisher info by given game' })
  @ApiResponse({ status: 200, description: 'Publisher data is gotten' })
  async getPublisherByGame(@Param('id') id): Promise<IGame[]> {
    return this.gameService.findPublisher(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create new Game' })
  @ApiResponse({ status: 200, description: 'Game is created' })
  async createGames(@Body() createParams: CreateGameRequest): Promise<void> {
    await this.gameService.createNewGame(createParams);
  }

  @Post('/processForReleaseDates')
  @ApiOperation({ summary: 'remove the games having a release date older than 18 months and apply a discount' })
  @ApiResponse({ status: 200, description: 'Required updates was applied' })
  async processForReleaseDates(): Promise<void> {
    await this.gameService.processForReleaseDates();
  }
}
