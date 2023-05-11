import Nav from 'react-bootstrap/Nav';
import React, { useState , useEffect} from 'react'
import { auth } from "../services/firebase";
import { onAuthStateChanged ,signOut } from "firebase/auth";

const AuthLogin = ()=> {
  
  const [authenticatedUx, setAuthenticatedUx] = useState("");

  useEffect(() =>{
    const listenerAuthUx = onAuthStateChanged(auth, (user) =>{
      if (user) {
        // User is signed in, see docs for a list of available properties
        //const uid = user.uid;
        setAuthenticatedUx(user);
      } else {
        setAuthenticatedUx(null);
      }
    })
    return ()=>{
      listenerAuthUx();
    };
  },[])

const userSignOut = ()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log("user is outttttt!");
  }).catch((error) => {
    // An error happened.
    console.log("user is not out but dont know whyyyyy");
  });

}
  return (  
    <>
    { authenticatedUx === null ? 
      <>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
      </>
      :
<>
        <Nav.Link href="/profile">My profile</Nav.Link>
        <Nav.Link href="/" onClick={userSignOut}>Log out</Nav.Link>
      </>
  }
    </>
  );
}

export default AuthLogin;