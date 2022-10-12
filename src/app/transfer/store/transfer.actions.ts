import { createAction, props } from "@ngrx/store";
import { Transfer } from "src/app/transfer/transfer.interface";

export const loadTransfers = createAction('[Transfer API] Load Transfers')

export const loadTransfersSuccess = createAction(
    '[Transfer API] Transfer Load Success',
    props<{ transfers: Transfer[] }>()
);

export const addTransfer = createAction(
    '[Transfer API] Add Transfers',
    props<{ payload: Transfer }>()
)

export const updateTransfer = createAction(
    '[Transfer API] Update Transfer',
    props<{ id: string, payload: Transfer }>()
)

export const removeTransfer = createAction(
    '[Transfer API] Remove Transfer',
    props<{ id: string }>()
)