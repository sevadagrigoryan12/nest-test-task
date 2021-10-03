import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { Publisher } from './publisher.schema';

export type GameDocument = Game & Document;

@Schema()
export class Game {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop()
  price: number;

  @Prop()
  tags: string[];

  @Prop()
  releaseDate: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Publisher.name })
  @Type(() => Publisher)
  publisher: Publisher;
}

export const GameSchema = SchemaFactory.createForClass(Game);
