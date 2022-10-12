import { createReducer, on } from "@ngrx/store";
import { setAPIStatus } from "./app.action";
import { AppState } from "./app.state";


export const initialState: AppState = {
    apiStatus: '',
    apiResponse: ''
}

export const appReducer = createReducer(
    initialState,
    on(setAPIStatus, (state, { status }) => { return status })
    )