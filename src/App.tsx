import "./App.css";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import Oscar from "./components/Oscar";
import { Status } from "./components/Status";

function App() {
  return (
    <div className="App">
      <Status status="error" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet name="Rahul" isLoggedIn={true} />
    </div>
  );
}

export default App;
