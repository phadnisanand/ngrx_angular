
import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";
export const selectCounterState = (state: AppState)  => state.count;
export const selectLoggedUserData = (state: AppState) => state.logUserData;
export const selectCount = createSelector(selectCounterState, (state) => state.count);
export const selectUserData = createSelector(selectLoggedUserData, (state) =>  state.logUserData);
