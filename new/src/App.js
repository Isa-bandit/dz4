import React, { useState, useEffect } from "react";
import MainPage from "./pages/MainPage/MainPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const name = prompt("Введите ваше имя:");
    const lastname = prompt("Введите вашу фамилию:");

    setUser({ name, lastname });
  }, []);

  return (
      <div>
        {user && user.name === "John" && user.lastname === "Johns" ? (
            <MainPage user={user} />
        ) : (
            <ErrorPage user={user} />
        )}
      </div>
  );
}

export default App;