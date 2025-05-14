// src/components/Layout/index.jsx
import Sidebar from "../SideBar";

import {Container, ContentWrapper, Content} from "./style"


const Layout = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <ContentWrapper>
        <Content>{children}</Content>
      </ContentWrapper>
    </Container>
  );
};

export default Layout;
