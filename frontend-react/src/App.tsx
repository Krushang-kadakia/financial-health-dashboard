// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { userManager } from "./auth/UserManager";
import { useEffect, useState } from "react";

function CallbackPage() {
  useEffect(() => {
    userManager.signinRedirectCallback().then(() => {
      window.location.href = "/";
    }).catch((error) => {
      console.error("Callback error", error);
    });
  }, []);

  return <p>Processing login...</p>;
}

function HomePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    userManager.getUser().then(setUser);
  }, []);

  const login = () => {
    userManager.signinRedirect();
  };

  const logout = () => {
    userManager.signoutRedirect();
  };

  return (
    <div>
      <h1>Financial Health Dashboard</h1>
      {user ? (
        <>
          <p>Welcome, {user.profile.email}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/callback" element={<CallbackPage />} />
      </Routes>
    </Router>
  );
}
