import { ActionReducerMap } from '@ngrx/store';
import { createSelector } from 'reselect';

import * as fromDashboardReducer from './reducers/dashboard.reducer';

/**
 * We treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface MainModuleState {
    dashboard: fromDashboardReducer.IDashboardState;
}

export const mainModuleInitialState: MainModuleState = {
    dashboard: fromDashboardReducer.initialDashboardStoreState
};

export const mainModuleReducers: ActionReducerMap<MainModuleState> = {
    dashboard: fromDashboardReducer.dashboardReducer
};

// main selectors
export const getDashboardState = (state) => state.MainModule.dashboard;

// selectors
export const getQuantityOfCharts = createSelector(getDashboardState, (state: fromDashboardReducer.IDashboardState) => state.quantityOfCharts);
