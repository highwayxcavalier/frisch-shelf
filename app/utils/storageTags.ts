import { ChipType } from '../types/Chips';
import isToday from 'date-fns/isToday';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';

export const storageTags: ChipType[] = [
  'fridge',
  'freezer',
  'pantry',
  'cellar',
];

export enum ExpirationTagsEnum {
  EXPIRE_SOON = 'expire soon',
  EXPIRED = 'expired',
}

export const getDateTags = (date: Date): ExpirationTagsEnum[] => {
  const currentDate = new Date();
  const tags: ExpirationTagsEnum[] = [];

  if (isToday(date)) tags.push(ExpirationTagsEnum.EXPIRED);
  else if (differenceInCalendarDays(date, currentDate) <= 2)
    tags.push(ExpirationTagsEnum.EXPIRE_SOON);

  return tags;
};
