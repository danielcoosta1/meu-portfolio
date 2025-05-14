import SideBar from "../SideBar";
import { Container, Content } from "./style.js";

const Layout = ({ children }) => {
  return (
    <Container>
      <SideBar />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
