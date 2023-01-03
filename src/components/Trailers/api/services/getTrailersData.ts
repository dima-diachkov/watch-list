import { TrailerCard } from '../../../CardContainer/types/CardTypes';

export const getTrailersData = (data: Array<TrailerCard>) => data.slice(0, 4);
