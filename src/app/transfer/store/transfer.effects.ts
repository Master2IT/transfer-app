import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { catchError, EMPTY, map, mergeMap, of, switchMap, withLatestFrom } from "rxjs";
import { setAPIStatus } from "src/app/store/app.action";
import { AppState } from "src/app/store/app.state";
import { TransferService } from "src/app/transfer/transfer.service";
import { addTransfer, loadTransfers, loadTransfersSuccess, removeTransfer, updateTransfer } from "./transfer.actions";
import { selectTransfers } from "./transfer.selectors";

@Injectable()
export class TransfersEffect {
    constructor(
        private actions$: Actions,
        private transferService: TransferService,
        private appStore: Store<AppState>,
        private store: Store
    ) { }


    loadTransfers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadTransfers),
            switchMap(() => {
                return this.transferService
                    .findAll()
                    .pipe(map((data: any) => loadTransfersSuccess({ 
                        transfers: data.data 
                    })))
            })
        )
    );

    addTransfers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addTransfer),
            switchMap(action => {
                this.appStore.dispatch(setAPIStatus({
                    status: {
                        apiResponse: '',
                        apiStatus: ''
                    }
                }))
                return this.transferService
                    .createTransfer(action.payload)
                    .pipe(map((data: any) => {
                        return setAPIStatus({
                            status: {
                                apiResponse: data.message,
                                apiStatus: 'success'
                            }
                        })
                    }
                    ))
            })
        )
    );
    
    updateTransfers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateTransfer),
            switchMap(action => {
                this.appStore.dispatch(setAPIStatus({
                    status: {
                        apiResponse: '',
                        apiStatus: ''
                    }
                }))
                return this.transferService
                    .editTransfer(action.id, action.payload)
                    .pipe(map((data: any) => {
                        return setAPIStatus({
                            status: {
                                apiResponse: data.message,
                                apiStatus: 'success'
                            }
                        })
                    }
                    ))
            })
        )
    );
    
    removeTransfers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(removeTransfer),
            switchMap(action => {
                this.appStore.dispatch(setAPIStatus({
                    status: {
                        apiResponse: '',
                        apiStatus: ''
                    }
                }))
                return this.transferService
                    .removeTransfer(action.id)
                    .pipe(map((data: any) => {
                        return setAPIStatus({
                            status: {
                                apiResponse: data.message,
                                apiStatus: 'success'
                            }
                        })
                    }
                    ))
            })
        )
    );
}   