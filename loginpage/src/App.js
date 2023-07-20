import React from "react";
import Login from "./Login";

var userIsRegistered = true;

const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      <Login isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
