import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import FrontPage from "./components/FrontPage/FrontPage";
import Breeds from "./components/Breeds/Breeds";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import CreateBreed from "./components/CreateBreed/CreateBreed";
import BreedDetails from "./components/BreedDetails/BreedDetails";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<FrontPage />} />
        <Route exact path="/home" element={<FrontPage />} />
        <Route exact path="/breeds" element={<Breeds />} />
        <Route exact path="/createBread" element={<CreateBreed />} />
        <Route exact path="/breedDetails/:id" element={<BreedDetails />} />
      </Routes>
    </Provider>
  );
}

export default App;
