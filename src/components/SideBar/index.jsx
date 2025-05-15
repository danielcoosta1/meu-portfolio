import {
  SidebarContainer,
  Name,
  Subtitle,
  NavList,
  NavItem,
  NavItemContent,
  NavItemLine,
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
          {[
            { label: "Sobre", href: "#sobre" },
            { label: "Experiência", href: "#experiencia" },
            { label: "Projetos", href: "#projetos" },
          ].map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={{}} // necessário para framer
            >
              <NavItemLine
                variants={{
                  rest: { width: 10 },
                  hover: { width: 20 },
                }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <NavItemContent
                variants={{
                  rest: { scale: 1, color: "#8892b0" },
                  hover: { scale: 1.05, color: "#64ffda" },
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.label}
              </NavItemContent>
            </NavItem>
          ))}
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
