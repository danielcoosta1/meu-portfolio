import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Sobre from "./sections/Sobre";
import Experiencia from "./sections/Experiencia";
import Projetos from "./sections/Projetos";
import PaginaProjetos from "./pages/Projetos";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Sobre />
              <Experiencia />
              <Projetos />
            </Layout>
          }
        />
        <Route path="/projetos" element={<PaginaProjetos />} />
      </Routes>
    </Router>
  );
}

export default App;
