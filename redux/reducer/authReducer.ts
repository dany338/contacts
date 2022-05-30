import { USER_CREATE, UPDATE_IS_AUTH, LOGIN, LOGOUT } from '../types/auth';

export interface IInitialStateProps {
  isAuth: boolean;
  email: string | null;
  consulting: boolean;
  user: any | null;
}

export interface IActionProps {
  type: string;
  payload: any | unknown;
}

const initialState: IInitialStateProps = {
  isAuth: false,
  email: null,
  consulting: true,
  user: null,
}

export const authReducer = (state = initialState, action: IActionProps) => {
  switch (action.type) {
    case LOGIN:
      return {
          ...state,
          email: action.payload.email,
          isAuth: action.payload.isAuth,
      }

    case UPDATE_IS_AUTH:
      return {
          ...state,
          isAuth: action.payload.isAuth,
          email: action.payload.email,
          consulting: action.payload.consulting
      }

    case LOGOUT:
      return {
          ...state,
          isAuth: false,
          email: null
      }
    
    case USER_CREATE:
      return {
        ...state,
        user: action.payload,
      }

    default:
        return state;
  }
};

