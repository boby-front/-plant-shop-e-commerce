import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuyMessage from "./components/BuyMessage";
import Nav from "./components/Nav";
import UserLogin from "./components/UserLogin";
import Banner from "./containers/Banner";
import MainNewPlants from "./containers/MainNewPlants";
import MainNotice from "./containers/MainNotice";
import { useSelector } from "react-redux";
import MainShop from "./containers/MainShop";

function App() {
  const auth = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      {!auth.isLogin && <UserLogin />}
      <BuyMessage />
      <Nav />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/home" element={<Banner />} />
        <Route path="/shop" element={<MainShop />} />
      </Routes>
      <MainNotice />
    </BrowserRouter>
  );
}

export default App;
