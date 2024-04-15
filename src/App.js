import Layout from "./components/Layuot/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Students from "./pages/Students/Students";
import { Route, Routes } from "react-router-dom";
import "./styles/style.scss"
function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/About"} element={<About />}/>
        <Route path={"/Contact"} element={<Contact />}/>
        <Route path={"/Students"} element={<Students />}/>
      </Route>
    </Routes>
  );
}


export default App;
