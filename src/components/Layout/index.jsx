
import Sidebar from "../SideBar";
import { Container, Content } from "./style.js";

const Layout = ({ children }) => {
  return (
    <Container>
     <Sidebar/>
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
