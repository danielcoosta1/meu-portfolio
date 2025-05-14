import React from 'react';
import { Container, Content } from './styles';
import Sidebar from '../Sidebar';

const Layout = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <Content>
        {children}
      </Content>
    </Container>
  );
};

export default Layout;
