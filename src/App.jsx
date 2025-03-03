import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import Navbar from "./components/Navbar";
import "./index.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
