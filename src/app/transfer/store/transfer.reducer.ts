import { createReducer, on } from "@ngrx/store";
import { Transfer } from '../transfer.interface'
import { loadTransfersSuccess } from "./transfer.actions";

export const initialState: ReadonlyArray<Transfer> = [];

export const transferReducer = createReducer(
    initialState,
    on(loadTransfersSuccess, (state, { transfers }) => { return transfers })
);
