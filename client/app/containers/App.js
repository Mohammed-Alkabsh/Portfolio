import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import { setTokenHeader } from "../services/api";
import jwtDecode from "jwt-decode";

function App() {
  const [state, setState] = useState({
    id: "",
    username: "",
    role: "",
  });
  useEffect(() => {
    let _isMounted = true;

    if (_isMounted) {
      if (localStorage.MohammedAlkabshDevJWTToken) {
        const { id, username, role } = jwtDecode(localStorage.jwtToken);
        setState({ id, username, role });
        setTokenHeader(localStorage.MohammedAlkabshDevJWTToken);
      }
    }

    return () => {
      _isMounted = false;
    };
  }, []);

  return (
    <Router>
      <div className="onboarding">
        <Navbar id={state.id} username={state.username} role={state.role} />
        <Main id={state.id} username={state.username} role={state.role} />
      </div>
    </Router>
  );
}
export default App;
