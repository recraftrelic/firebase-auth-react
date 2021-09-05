import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";

const firebaseConfig = {
  apiKey: "AIzaSyCst1iAbgfxznI4z98CiNUj2mzBR8EbiEk",
  authDomain: "live-demo-b3724.firebaseapp.com",
  projectId: "live-demo-b3724",
  storageBucket: "live-demo-b3724.appspot.com",
  messagingSenderId: "269118493133",
  appId: "1:269118493133:web:20aeb425c3004b9766b484"
}

initializeApp(firebaseConfig);

function App() {
  const [ user, setUser ] = useState(null)

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
