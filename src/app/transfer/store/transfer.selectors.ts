import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Transfer } from '../transfer.interface';
 
export const selectTransfers = createFeatureSelector<Transfer[]>('transfers');
export const selectTransferById = (id: string) => {
    return createSelector(selectTransfers, (transfers: Transfer[])=>{
        var transfer = transfers.filter(o=> o._id == id)
        if(transfer.length == 0) return null;

        return transfer[0]
    })
}
