import { trailerReducer } from '../components/Trailers/reducers/trailersReducer';
import { combineReducers } from 'redux';
import cardContainerSlice from "../components/CardContainer/reducers/cardContainerReducer";


export const rootReducer = combineReducers({
  trailerReducer: trailerReducer,
  cardsSlice: cardContainerSlice,
});
