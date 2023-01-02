import { Card } from '../../../CardContainer/types/CardTypes';

export const getTrailersData = (data: Array<Card>) => data.slice(0, 4);
