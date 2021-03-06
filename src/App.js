import "./App.css";
import hikingtrips from "./Hikingtrips";
import HikeList from "./Components/HikeList";
import Detail from "./Components/Detail";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
function App() {
  return (
    <div className="App">
      <Navbar />
      <p></p>
      <Routes>
        <Route path="/404" element={<PageNotFound />} />
        <Route path="/" element={<HikeList hikingtrips={hikingtrips} />} />
        <Route path="/:slug" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
