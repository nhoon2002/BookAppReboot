import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAzsa7osbBbtM_lol3Y89Fx_gWDgidDpSg",
  authDomain: "bookappreboot.firebaseapp.com",
  databaseURL: "https://bookappreboot.firebaseio.com",
  projectId: "bookappreboot",
  storageBucket: "",
  messagingSenderId: "427837297237"
};

var fire = firebase.initializeApp(config)

export default fire;
