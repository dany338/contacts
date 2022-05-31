import app from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

import firebaseConfig from "./config";

export interface IFirebase {
  auth: number;
  db: string;
  storage: string;
}

class Firebase implements IFirebase {
  auth: any;
  db: any;
  storage: any;

  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }

    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
  }
}

const firebase = new Firebase();

export default firebase;
