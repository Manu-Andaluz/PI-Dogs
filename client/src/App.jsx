import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import FrontPage from "./components/FrontPage/FrontPage";
import Breeds from "./components/Breeds/Breeds";
import { Provider } from "react-redux";
import store from "./redux/store/index";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<FrontPage />} />
        <Route exact path="/home" element={<FrontPage />} />
        <Route exact path="/breeds" element={<Breeds />} />
      </Routes>
    </Provider>
  );
}

export default App;
