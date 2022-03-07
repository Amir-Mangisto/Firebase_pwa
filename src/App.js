import React from "react";
import "./App.css";
import LoginButton from "./Components/features/Login/LoginButton.jsx";
import LogoutButton from "./Components/features/Logout/LogoutButton";
import { FirebaseProviderComp } from "./Context/firebase-context";

function App() {
  return (
    <FirebaseProviderComp>
      <div className="App">
        <header className="App-header">
          <LoginButton />
          <LogoutButton />
        </header>
      </div>
    </FirebaseProviderComp>
  );
}

export default App;
