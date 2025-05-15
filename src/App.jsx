import Layout from "./components/Layout";
import Sobre from "./sections/Sobre";
import Experiencia from "./sections/Experiencia";
import Projetos from "./sections/Projetos";

function App() {
  return (
    <Layout>
      <Sobre />
      <Experiencia />
      <Projetos />
    </Layout>
  );
}

export default App;
