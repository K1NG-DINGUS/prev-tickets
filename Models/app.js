  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAjJQTVbjp7JMHzpSyw58yWjS5_9iEcb0c",
    authDomain: "prev-tickets.firebaseapp.com",
    projectId: "prev-tickets",
    storageBucket: "prev-tickets.appspot.com",
    messagingSenderId: "206651375233",
    appId: "1:206651375233:web:6e325adf1f52fff0949780"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app;

  // Initialize Cloud Storage and get a reference to the service
  //export const storage = getStorage(app);