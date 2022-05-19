import Nav from "./navbar";
import Sidebar from "./sidebar";
import TopHeadlines from "../Page/TopHeadlines";
import Tech from "../Page/Tech";
import Finance from "../Page/Finance";
import Entertainment from "../Page/Entertainment";
import Fashion from "../Page/Fashion";
import Crypto from "../Page/Crypto";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Home from '../Page/Homepage'
import Search from "../Page/Search";
import About from "../Page/About";

function Main() {
  return (
    <>
      <div>
        <Nav />
        <Sidebar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/TopHeadlines" element={<TopHeadlines />} />
            <Route path="/Tech" element={<Tech />} />
            <Route path="/Fashion" element={<Fashion />} />
            <Route path="/Finance" element={<Finance />} />
            <Route path="/Crypto" element={<Crypto />} />
            <Route path="/Entertainment" element={<Entertainment />} />
            <Route path="/Search" element={<Search/>} />
            <Route path="/About" element={<About />} />
          </Routes>
        <Footer />
      </div>
    </>
  );
}
export default Main;
