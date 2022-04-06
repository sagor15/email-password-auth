import "./App.css";
import { getAuth } from "firebase/auth";
import app from "./firebase.init";

const auth = getAuth(app);
function App() {
  return <div className="App"></div>;
}

export default App;
