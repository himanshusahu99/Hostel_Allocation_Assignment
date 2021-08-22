import firebase from "firebase";
// import "firebase/analytics";
// import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7IXFk6jDKPDt3U_HBQlry8AwBY0JG_qE",
  authDomain: "hostel-allocation-assign-93429.firebaseapp.com",
  projectId: "hostel-allocation-assign-93429",
  storageBucket: "hostel-allocation-assign-93429.appspot.com",
  messagingSenderId: "342174418206",
  appId: "1:342174418206:web:78a222d3603e15c87e350f",
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
