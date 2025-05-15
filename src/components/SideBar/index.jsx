import {
  SidebarContainer,
  Name,
  Subtitle,
  NavList,
  NavItem,
  NavItemContent,
  NavItemLine,
} from "./styles";

import { useEffect, useState } from "react";

function Sidebar() {
  const navItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Projetos", href: "#projetos" },
  ];

  const [activeSection, setActiveSection] = useState("sobre");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // quando 60% da seção estiver visível
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <SidebarContainer>
      <div>
        <Name>Daniel Costa</Name>
        <Subtitle>Desenvolvedor Front-End</Subtitle>

        <NavList>
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.slice(1);

            return (
              <NavItem
                key={item.href}
                href={item.href}
                initial="rest"
                animate={isActive ? "active" : "rest"}
                whileHover="hover"
                variants={{
                  rest: { opacity: 1, x: 0 },
                  hover: { opacity: 1, x: 0 },
                  active: { opacity: 1, x: 0 },
                }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <NavItemLine
                  variants={{
                    rest: {
                      width: 45,
                      backgroundColor: "#8892b0",
                      transition: { duration: 0.3 },
                    },
                    hover: {
                      width: 60,
                      backgroundColor: "#64ffda",
                      transition: { duration: 0.3 },
                    },
                    active: {
                      width: 60,
                      backgroundColor: "#64ffda",
                      transition: { duration: 0.3 },
                    },
                  }}
                />
                <NavItemContent
                  variants={{
                    rest: { scale: 1, color: "#8892b0" },
                    hover: { scale: 1.05, color: "#64ffda" },
                    active: { scale: 1.05, color: "#64ffda" },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item.label}
                </NavItemContent>
              </NavItem>
            );
          })}
        </NavList>
      </div>
    </SidebarContainer>
  );
}

export default Sidebar;
