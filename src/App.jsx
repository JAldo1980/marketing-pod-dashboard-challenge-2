import React from "react";
import Container from "./components/Container";
import Dashboard from "./Dashboard";
import Toggle from "./components/Toggle";

import "./styles/style.css";

function App() {
  return (
    <>
      <h1 className="text-6xl p-2.5 text-center">
        Employee Dashboard
      </h1>
      <h4 className="p-2.5 text-center">
        Built with React.JS | Tailwind
      </h4>
      <div className="flex justify-center text-3xl m-1">
        <Toggle />
      </div>

      <Container>
        <Dashboard />
      </Container>
    </>
  );
}

export default App;
