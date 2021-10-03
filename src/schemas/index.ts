import { GameSchema, Game } from './game.schema';
import { PublisherSchema, Publisher } from './publisher.schema';

export * from './game.schema';
export * from './publisher.schema';

export const SchemasDefinitions = [
  { name: Game.name, schema: GameSchema },
  { name: Publisher.name, schema: PublisherSchema },
];
