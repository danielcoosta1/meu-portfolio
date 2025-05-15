// src/components/Layout/index.jsx
import Sidebar from "../SideBar";
import SocialBar from "../SocialBar";

import {Container, ContentWrapper, Content} from "./style"


const Layout = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <SocialBar />
      <ContentWrapper>
        <Content>{children}</Content>
      </ContentWrapper>
    </Container>
  );
};

export default Layout;
