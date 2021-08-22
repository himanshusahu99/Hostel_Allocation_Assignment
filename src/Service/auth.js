import firebase from "../Congif/Firebaseconfig";
const SocialMediaAuth = (provider) => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      return res.user;
    })
    .catch((er) => {
      return er;
    });
};

export default SocialMediaAuth;
