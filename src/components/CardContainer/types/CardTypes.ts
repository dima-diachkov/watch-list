import { SerializedError } from "@reduxjs/toolkit";

export interface Card {
    "id": number;
    "poster_path": string;
    "original_title": string;
    "release_date": string;
    "vote_average": number;
}

export interface TrailerCard extends Card {
    "backdrop_path": string;
    "key": string;
}

export interface InitialCardsState {
    cards: Array<Card>,
    status: boolean,
    error: SerializedError
}

export interface PayloadCards {
    payload: Array<Card>
}

export interface PayloadCardsError {
    error: SerializedError
}