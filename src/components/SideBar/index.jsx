// src/components/Sidebar/index.jsx
import {
  SidebarContainer,
  Name,
  Subtitle,
  NavList,
  NavItem,
  SocialLinksContainer,
  SocialLink,
} from "./styles";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Sidebar() {
  return (
    <SidebarContainer>
      <div>
        <Name>Daniel Costa</Name>
        <Subtitle>Desenvolvedor Front-End</Subtitle>

        <NavList>
          <NavItem href="#sobre">Sobre</NavItem>
          <NavItem href="#experiencia">Experiência</NavItem>
          <NavItem href="#projetos">Projetos</NavItem>
        </NavList>
      </div>

      <SocialLinksContainer>
        <SocialLink
          href="https://github.com/danielcoosta1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/daniel-correia-costa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </SocialLink>
        <SocialLink
          href="https://instagram.com/dcc.daniel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </SocialLink>
      </SocialLinksContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
