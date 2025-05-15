import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Container, SocialLink, Line } from "./style";

function SocialBar() {
  return (
    <Container>
      <SocialLink
        href="https://github.com/danielcoosta1"
        target="_blank"
        rel="noopener noreferrer"
        whileHover="hover"
        initial="rest"
        animate="rest"
        variants={{
          rest: { scale: 1, color: "#8892b0" },
          hover: { scale: 1.2, color: "#64ffda" },
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FaGithub size={24} />
      </SocialLink>

      <SocialLink
        href="https://www.linkedin.com/in/daniel-correia-costa/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover="hover"
        initial="rest"
        animate="rest"
        variants={{
          rest: { scale: 1, color: "#8892b0" },
          hover: { scale: 1.2, color: "#64ffda" },
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FaLinkedin size={24} />
      </SocialLink>

      <SocialLink
        href="https://instagram.com/dcc.daniel"
        target="_blank"
        rel="noopener noreferrer"
        whileHover="hover"
        initial="rest"
        animate="rest"
        variants={{
          rest: { scale: 1, color: "#8892b0" },
          hover: { scale: 1.2, color: "#64ffda" },
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FaInstagram size={24} />
      </SocialLink>

      <Line />
    </Container>
  );
}

export default SocialBar;
