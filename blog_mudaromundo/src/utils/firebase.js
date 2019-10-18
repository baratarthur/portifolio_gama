import firebase from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqcNvdB-FQ17VaR3kOXQXR4fzCIOWSrSs",
    authDomain: "mudar-o-mundo-blog.firebaseapp.com",
    databaseURL: "https://mudar-o-mundo-blog.firebaseio.com",
    projectId: "mudar-o-mundo-blog",
    storageBucket: "gs://mudar-o-mundo-blog.appspot.com/",
    messagingSenderId: "181783338080",
    appId: "1:181783338080:web:57623311c03ec313b17705",
    measurementId: "G-H5VQMH4SP2"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export { firebaseApp };
export default firebase;