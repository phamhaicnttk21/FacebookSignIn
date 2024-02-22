import "./App.css";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { authentication } from "./firebase";
function App() {
  
  const singInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
  signInWithPopup(authentication, provider)
    .then((resolve) => {
      console.log(resolve);
    })
    .catch((err) => {
      console.log(err);
    });
  };
  return (
    <div className='App'>
      <button onClick={singInWithFacebook}>Sign in with Facebook</button>
    </div>
  );
}

export default App;
