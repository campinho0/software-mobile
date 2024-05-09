import app from "firebase/compat/app";
import 'firebase/compat/firestore';
import firebaseConfig from "./config";

class Firebase{
    constructor(){
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig);
            console.log("**********************conectado a la base de datos**********************")
        }
        this.db = app.firestore();
        console.log(firebase)
    }
}

const firebase = new Firebase();
export default firebase;