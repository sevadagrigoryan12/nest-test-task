import * as mongoose from 'mongoose';

export type ObjectId = mongoose.Schema.Types.ObjectId;

export const calculatePastDate = (month: number): Date => {
  const date = new Date();
  date.setMonth(date.getMonth() - month);
  return new Date(date);
};
