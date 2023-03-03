import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Booklist from "./components/Booklist";
import Navbar from "./components/Navbar";
import store from "./redux/store";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Provider store={store}>
      <div>
        <Navbar setSearchTerm={setSearchTerm} />
        <Booklist searchTerm={searchTerm} />
      </div>
    </Provider>
  );
}

export default App;
