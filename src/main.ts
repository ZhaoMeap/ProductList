import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializeApp } from "firebase/app";
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCw_BlTjlHTrQ4U8alRtphvRPaanuEiW4",
  authDomain: "web-angular-productlist.firebaseapp.com",
  projectId: "web-angular-productlist",
  storageBucket: "web-angular-productlist.appspot.com",
  messagingSenderId: "246866503231",
  appId: "1:246866503231:web:d863481cfe01211103ba8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
