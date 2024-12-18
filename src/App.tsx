import { useState } from "react";
import Nav from "./Nav";
import Profile from "./Profile";
import Skills from "./Skills";
import About from "./About";
// import FormComponent from "./Form";

const App = () => {
  const [route, setRoute] = useState("");
  return (
    <div>
      <Nav setRoute={setRoute} />
      {route === "" && <Profile />}
      {route === "skills" && <Skills />}
      {route === "about" && <About />}
    </div>
  );
};
export default App;
