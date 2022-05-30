import firebase from "../../firebase";
import { USER_CREATE, UPDATE_IS_AUTH, LOGIN, LOGOUT } from '../types/auth';
import Cookies from "js-cookie";

export const createAccount = async (name: string, email: string, password: string) => {
  return async (dispatch: any) => {
    const newUser = await firebase.auth.createUserWithEmailAndPassword(
      email,
      password
    );

    await newUser.user.updateProfile({ displayName: name });

    Cookies.set("userInfo", JSON.stringify(newUser.user));

    dispatch({
      type: USER_CREATE,
      payload: newUser.user,
    });
  };
};

export const validateAuth = () => {
  return (dispatch: any) => {
    firebase.auth().onAuthStateChanged((user: any) => {
      console.log("mira el user", user);
      let autenticado;
      if (user?.uid) {
        autenticado = true;
      } else {
        autenticado = false;
      }

      dispatch({
        type: UPDATE_IS_AUTH,
        payload: {
          isAuth: autenticado,
          email: user?.email,
          consultando: false,
        },
      });
    });
  };
};

export const initSession = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      dispatch({
        type: LOGIN,
        payload: { email: user.email, isAuth: true },
      });
    } catch (error) {
      console.log("mira el error", error);
    }
  };
};

export const closeSesion = () => {
  return async (dispatch: any) => {
    try {
      await firebase.auth().signOut();
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export {}