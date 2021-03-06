import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const getLogin = async () => {
  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(`[Login]User: ${user.displayName}`);
    console.log(`[Login]Token: ${user.getIdToken()}`);
    localStorage.setItem("accessToken", token);
    
    const usr = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    };
    localStorage.setItem("userInfo", JSON.stringify(usr));

    return [true, usr];
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);

    console.log(
      `Error code: ${errorCode}, msg: ${errorMessage}, emailerr: ${email}, cred: ${credential}`
    );
    return false;
  }
};

export { getLogin };
