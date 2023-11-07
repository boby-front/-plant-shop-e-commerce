import BuyMessage from "./components/BuyMessage";
import Nav from "./components/Nav";
import UserLogin from "./components/UserLogin";
import Banner from "./containers/Banner";
import MainNewPlants from "./containers/MainNewPlants";
import MainNotice from "./containers/MainNotice";

function App() {
  return (
    <>
      <UserLogin />
      <BuyMessage />
      <Nav />
      <Banner />
      <MainNewPlants />
      <MainNotice />
    </>
  );
}

export default App;
