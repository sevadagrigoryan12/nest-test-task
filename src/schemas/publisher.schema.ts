import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Transform } from 'class-transformer';
 
export type PublisherDocument = Publisher & Document;
 
@Schema()
export class Publisher {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;
 
  @Prop({ required: true })
  name: string;
 
  @Prop({ required: true })
  siret: number;
 
  @Prop({ required: true })
  phone: number;
}
 
export const PublisherSchema = SchemaFactory.createForClass(Publisher);