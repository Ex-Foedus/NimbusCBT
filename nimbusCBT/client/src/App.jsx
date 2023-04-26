import { useState } from "react";
import EmailValidator from "./components/EmailValidation.jsx";
import TimeCapsule from "./components/TimeCapsule.jsx";

function App() {
  return (
    <div className="App">
      <EmailValidator />
      <TimeCapsule />
    </div>
  );
}

export default App;
