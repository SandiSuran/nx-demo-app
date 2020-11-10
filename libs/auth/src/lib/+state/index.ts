import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthPartialState, AUTH_FEATURE_KEY } from './auth.reducer';

export * from './auth.actions';
export * from './auth.reducer';

const getAuthState = createFeatureSelector<AuthPartialState>('auth');

export const auth = createSelector(
  getAuthState,
  (state) => state[AUTH_FEATURE_KEY]
);

export const getUser = createSelector(auth, (state) => state.user);
