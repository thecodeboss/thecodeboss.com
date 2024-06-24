import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";

// TODO: Procedural generation of background
// Public contributions to open source

// For each skill, include a star rating of proficiency, and a brief description of how it's been used

// Probably need an entire section on AWS technologies alone

// List Skills, Tools, Frameworks, Standards, AI, etc. in a table
// Under each category, sort skills by proficiency DESC
// Ex:
// Skills
// Kubernetes 5/5 - Used to deploy and manage microservices
// TypeScript/JavaScript 5/5 - Used to write frontend and backend code
// Tools
// Datadog 5/5 - Used to monitor and alert on application performance
// ...

// Windows, Linux, Mac

// Some Android/iOS/React Native experience

function App() {
  return (
    <>
      <div className="header">
        <h3>thecodeboss</h3>
        <Nav />
        <div className="light-dark-toggle"></div>
      </div>
      <Outlet />
    </>
  );
}

export default App;
