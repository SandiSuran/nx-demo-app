import { User } from '@demo-app/data-models';
import { authActions, AuthActionTypes } from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthData {
  loaded: boolean;
  loading: boolean;
  user: User;
  error?: string | null;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthData;
}

export const initialState: AuthData = {
  user: null,
  loaded: false,
  loading: false,
};

export function authReducer(
  state = initialState,
  action: authActions
): AuthData {
  switch (action.type) {
    case AuthActionTypes.Login:
      return { ...state, loading: true };
    case AuthActionTypes.LoginSuccess:
      return { ...state, loading: false, user: action.payload };
    case AuthActionTypes.LoginFail:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
